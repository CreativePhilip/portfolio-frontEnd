import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormControl, FormGroup, Validators}             from '@angular/forms'
// @ts-ignore
import {MatSnackBar}                                    from '@angular/material/snack-bar'
import {DatabaseService}                                from '../../../services/database-connection/database.service'
import {ArticleModel}                                   from '../../../services/database-connection/Models/ArticleModel'
import {CategoryModel}                                  from '../../../services/database-connection/Models/CategoryModel'
import {MiniArticleModel}                               from '../../../services/database-connection/Models/MiniArticleModel'


@Component({
  selector: 'app-admin-articles-edit',
  templateUrl: './admin-articles-edit.component.html',
  styleUrls: ['./admin-articles-edit.component.scss']
})
export class AdminArticlesEditComponent implements OnInit
{
  @Input() article: ArticleModel
  @Output() actionSuccess = new EventEmitter()

  categoryList: CategoryModel[] = []
  articleList: MiniArticleModel[] = []

  downloadedImageData
  selectedImageData

  tinyMceSettings = {
    height: 500,
    menubar: true,
    plugins: [
      'autoresize advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help',
  }

  form: FormGroup

  constructor(private db: DatabaseService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      preview_text: new FormControl('', [Validators.required]),
      text: new FormControl('', []),
      icon: new FormControl('', []),
      category: new FormControl('', []),
      previous_article: new FormControl('', []),
      next_article: new FormControl('', []),
      published: new FormControl(false, [])
    })

    this.loadAdditionalData()

    if (!(this.article == null)) {
      this.fillForm()
    }
  }

  fillForm() {
    this.form.patchValue({title: this.article.title})
    this.form.patchValue({preview_text: this.article.preview_text})
    this.form.patchValue({text: this.article.text})
    this.form.patchValue({category: this.article.categories})
    this.form.patchValue({previous_article: this.article.previous_article})
    this.form.patchValue({next_article: this.article.next_article})
    this.form.patchValue({published: this.article.published})
  }

  loadAdditionalData() {
    this.db.getCategories().subscribe(value => this.categoryList = value)

    if (this.article == null) {
      this.db.getAllArticlesMini(-1).subscribe(value => this.articleList = value)
    } else {
      this.db.getAllArticlesMini(this.article.id).subscribe(value => this.articleList = value)
      this.db.getImageFromServer(this.article.icon).subscribe(value => {
        this.createImgFromBlob(value)
      })
    }

  }

  createImgFromBlob(blob) {
    let reader = new FileReader()

    reader.addEventListener('load', () => {
      this.downloadedImageData = reader.result
    }, false)
    reader.readAsDataURL(blob)
  }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName)
  }


  articleTextUpdate(event) {
    this.form.patchValue({text: event.editor.getContent()})
  }

  publishedButtonHandler(value: boolean) {
    if (value) {
      this.form.patchValue({published: false})
    } else {
      this.form.patchValue({published: true})
    }
  }

  iconPicker(input) {
    this.form.patchValue({icon: input.files[0]})
    this.downloadedImageData = undefined

    const fileReader = new FileReader()

    fileReader.addEventListener('load', () => {
      this.selectedImageData = fileReader.result
    })
    fileReader.readAsDataURL(input.files[0])
  }

  submitForm() {
    let articleData = new FormData()
    articleData.append('title', this.form.controls.title.value)
    articleData.append('preview_text', this.form.controls.preview_text.value)
    articleData.append('text', this.form.controls.text.value)

    if (this.downloadedImageData === undefined) {
      articleData.append('icon', this.form.controls.icon.value)

    }

    articleData.append('previous_article', this.form.controls.previous_article.value === null ? '' : this.form.controls.previous_article.value)
    articleData.append('next_article', this.form.controls.next_article.value === null ? '' : this.form.controls.next_article.value)
    articleData.append('published', this.form.controls.published.value)

    let categoryData = new FormData()
    categoryData.append('categories', JSON.stringify(this.form.controls.category.value))

    if (this.article == null) {
      this.createNewArticle(articleData, categoryData)
    } else {
      this.updateExistingArticle(articleData, categoryData)
    }
  }

  createNewArticle(data, category) {
    if (this.form.valid) {
      this.db.createArticle(data).subscribe(value => {
        this.db.updateArticleCategories(value.id, category).subscribe(() => {
          this.showMessage('Article created')
          this.actionSuccess.emit(true)
        })
      })
    }
  }

  updateExistingArticle(data, category) {
    if (this.form.valid) {
      this.db.updateArticle(this.article.id, data).subscribe(value => {
        this.db.updateArticleCategories(value.id, category).subscribe(() => {
          this.showMessage('Updated article')
          this.actionSuccess.emit(true)
        })
      })
    }
  }

  showMessage(message: string) {
    this.snackBar.open(message, '', {duration: 2000})
  }

}
