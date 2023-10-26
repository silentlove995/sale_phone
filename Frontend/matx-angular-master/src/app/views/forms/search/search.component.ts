import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormBuilder } from '@angular/forms';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formSearch: any;
  categoryArr: Array<any>;
  brandArr: Array<any>;
  headerName: Array<any>;
  rowData: Array<any>;

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;
  agGrid: any;
  params: any;
  gridRendered: any;
  // For accessing the Grid's API
  constructor(private formBulder: FormBuilder,

    private http: HttpClient) {
    this.formSearch = this.formBulder.group({
      name: '',
      model: '',
      color: '',
      fromPrice: '',
      toPrice: '',
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
    this.headerName = ['STT','Tên danh mục','Tên sản phẩm','Model',
  'Màu sắc','Số lượng','Chi tiết sản phẩm','Giá khởi điểm','Khuyến mãi','Giá bán','Chi nhánh'];

    this.rowData = [
      
    ];
  }

  searchReq() {

  }
  
  
}