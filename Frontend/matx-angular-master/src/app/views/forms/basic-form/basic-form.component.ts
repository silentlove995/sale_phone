import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormBuilder } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  productForm: any;
  formattedAmount: string;
  categoryArr: Array<any>;
  brandArr: Array<any>;

  constructor(private formBulder: FormBuilder) {
    this.productForm = this.formBulder.group({
      name: '',
      model: '',
      color: '',
      stockQuantity: '',
      description: '',
      technologyDescription: '',
      originalPrice: '',
      discount: '',
      salePrice: '',
      categoryName: '',
      brand: '',
    });

    this.categoryArr = [{ label: 'Điện thoại', value: '0' },
    { label: 'Máy tính pc', value: '1' },
    { label: 'Máy tính laptop', value: '2' },
    { label: 'Bàn Phím', value: '3' },];

    this.brandArr = [{ label: 'Hà Nội', value: '0' },
    { label: 'Hồ Chính Minh', value: '1' },
    { label: 'Đà Nẵng', value: '2' },
    { label: 'Đà Lạt', value: '3' },];

  }

  ngOnInit() {

  }

  caculatorSale(): number {
    const originalPrice = this.productForm.get('originalPrice').value();
    const discount = this.productForm.get('discount').value();
    let salePrice = originalPrice * discount / 100;
    return salePrice;
  }

  submitProduct() {
    alert('tạo sản phẩm mới')
    console.log(this.productForm.getRawValue());
  }

  outputDemo(event:any){
    let salePrice = event.target.value
    this.productForm.get('salePrice').patchValue(salePrice);
  }
}