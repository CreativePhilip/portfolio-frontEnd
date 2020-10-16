import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormControl, FormGroup}                         from '@angular/forms'
import {DatabaseService}                                from '../../../services/database-connection/database.service'


@Component({
  selector: 'app-admin-categories-edit',
  templateUrl: './admin-categories-edit.component.html',
  styleUrls: ['./admin-categories-edit.component.scss']
})
export class AdminCategoriesEditComponent implements OnInit
{
  @Input() category
  @Output() actionSuccess = new EventEmitter()

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

  constructor(private db: DatabaseService) {
    this.form = new FormGroup({
      name: new FormControl('', []),
      icon: new FormControl('', []),
      description: new FormControl('', [])
    })
  }

  ngOnInit() {
    if (this.category) {
      this.loadSelectedData()
    }
  }

  loadSelectedData() {
    this.form.patchValue({name: this.category.name})
    this.form.patchValue({description: this.category.description})

    if (this.category.icon !== null) {
      this.db.getImageFromServer(this.category.icon).subscribe(value => this.createImgFromBlob(value))
    }
  }

  createImgFromBlob(blob) {
    let reader = new FileReader()

    reader.addEventListener('load', () => {
      this.downloadedImageData = reader.result
    }, false)
    reader.readAsDataURL(blob)
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

  descriptionUpdate(event) {
    this.form.patchValue({text: event.editor.getContent()})
  }


  submitForm() {
    if (this.form.valid) {
      let data = new FormData()
      data.append('name', this.form.controls.name.value)
      data.append('description', this.form.controls.description.value)

      if (this.downloadedImageData === undefined) {
        data.append('icon', this.form.controls.icon.value)
      }

      if (this.category !== null) {
        this.db.updateCategory(this.category.id, data).subscribe(value => {
          this.actionSuccess.emit(true)
        })
      } else {
        this.db.createCategory(data).subscribe(value => {
          this.actionSuccess.emit(true)
        })
      }

    }
  }
}
