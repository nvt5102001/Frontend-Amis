<template>
    <div class="content" @click="targetDefault">
    <div class="inner__content">
        <div class="content__header">
            <div class="content__header__title">
                <div class="content__title"> Nhân viên </div>
                <div class="header__button__list">
                    <div class="dropdown">
                    </div>
                    <div class="dropdown dbl-button dbl-button-green ">
                        <button class="btn dbl-button-left dbl-button-green-left" id="btnAddEmployee" @click="btnAddEmployee">
                            <div class="button__text ">
                                <span class="btn-text">Thêm</span>
                            </div>
                        </button>
                        <button class="btn dbl-button-right dbl-button-green-right">
                            <div class="button__text">
                                <div class="line"></div>
                                <div class="icon-16 icon-downFull-white icon btn-text"></div>
                            </div>
                        </button>
                    </div>
                    
                </div>
            </div>
            <div class="content__header__directory">
                <div class="dir">
                    <div class="icon icon-arrow-left icon-16"></div>
                    <a href="#">Tất cả danh mục</a>
                </div>
            </div>
        </div>
        <div class="content__body">
            <div class="content__body__options sticky left-0">
                <div class="content__body__option">
                    <div class="content__body__option-left">
                        <div class="dropdown center__body__option-left-item">
                            <button class="btn btn-default"
                            @click="handleOpenDeleteAll" 
                            :disabled="disableDeleteAll"
                            >
                                <div class="button__text">
                                    <span class="btn-text">Thực hiện hàng loạt</span>
                                    <div class="icon-16 icon-downFull-black icon btn-text opacity"></div>
                                </div>
                                <ul class="list-option" v-if="multipleOptions">
                                    <li class="item-option" >
                                        <a class="link-option" @click="handleDeleteAll"> Xóa </a>
                                    </li>
                                </ul>
                            </button>
                            
                        </div>
                    </div>
                    <div class="content__body__option-center">
                        <div class="center__body__option-center-item">
                            <div class="input-icon center__body__input">
                                <input type="text" 
                                placeholder="Tìm theo mã, tên nhân viên" 
                                class="input-normal input-icon-text"
                                @change="searchData"
                                v-model="keyword"

                                >
                                <div class="icon-16 icon icon-search"></div>
                            </div>
                        </div>
                    </div>
                    <div class="content__body__option-right">
                        <div class="center__body__option-right-item icon icon-24 icon-refresh" id="refreshData" @click="refreshOnClick" ></div>
                        <div class="center__body__option-right-item icon icon-24 icon-excel"
                        @click="exportTableToExcel"
                        ></div>
                        <!--<div class="center__body__option-right-item icon icon-24 icon-setting"></div> -->
                    </div>
                </div>
            </div>
            <div class="content__body__table">
                <div class="table__scroll">
                    <table class="ms-table" id="tbEmployeeList" ref="tableEmp">
                        <thead class="ms-thead" ref="tableEmployee">
                            <tr>
                                <th class="ms-out-left-white-16"></th>
                                <th class="ms-table-th ms-table-mul-checkall" style="top:-87px;">
                                    <label class="ms-checkbox-con">
                                        <input type="checkbox" 
                                        class="input-checkbox"
                                        v-model="selectAll"
                                        @change="handleCheckboxAll"
                                        >
                                        <span class="ms-checkbox">
                                            <span class="ms-checkbox-tick icon icon-checkbox-active icon-16 checked"></span>
                                        </span>
                                    </label>
                                </th>
                               
                                <!-- <div class="dis-contents background-white table-center"> -->
                                    <th class="ms-table-th dymamic-col static-col w-180 text-left" >
                                        <div class="table-th-title">
                                            <span>Mã nhân viên</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-220 text-left" >
                                        <div class="table-th-title">
                                            <span>Tên nhân viên</span>
                                        </div>    
                                    </th>

                                    <th class="ms-table-th dymamic-col static-col w-130 text-left">
                                        <div class="table-th-title">
                                            <span>Giới tính</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-150 text-center" >
                                        <div class="table-th-title">
                                            <span>Ngày sinh</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-150 text-left">
                                        <div class="table-th-title">
                                            <span>Số CMND</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-110 text-center" >
                                        <div class="table-th-title">
                                            <span>Ngày cấp</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-110 text-left">
                                        <div class="table-th-title">
                                            <span>Nơi cấp</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-500 text-left">
                                        <div class="table-th-title">
                                            <span>Địa chỉ</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-220 text-left" >
                                        <div class="table-th-title float-left">
                                            <span>Chức danh</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-220 text-left" >
                                        <div class="table-th-title float-left">
                                            <span>Tên phòng ban</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-200 text-left">
                                        <div class="table-th-title float-left">
                                            <span>Email</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-150 text-left" >
                                        <div class="table-th-title float-left">
                                            <span>Điện thoại di động</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-150 text-left">
                                        <div class="table-th-title float-left">
                                            <span>Điện thoại cố định</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-200 text-left" >
                                        <div class="table-th-title float-left">
                                            <span>Số tài khoản</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-200 text-left" >
                                        <div class="table-th-title float-left">
                                            <span>Tên ngân hàng</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-250 text-left ">
                                        <div class="table-th-title float-left">
                                            <span>Chi nhánh TK Ngân hàng</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-150 text-center" >
                                        <div class="table-th-title">
                                            <span>Là khách hàng</span>
                                        </div>    
                                    </th>
                                    <th class="ms-table-th dymamic-col static-col w-150 text-center" >
                                        <div class="table-th-title">
                                            <span>Là nhà cung cấp</span>
                                        </div>    
                                    </th>
                                <!-- </div> -->
                                <th class="ms-table-th ms-th-function w-130">
                                    <span class="ms-header-title float-right">Chức năng</span>
                                </th>
                                <th class="ms-out-right-white-30"></th>
                                <th class="ms-out-right-grey-30"></th>
                            </tr>
                        </thead>
                    <tbody class="ms-tbody">
                        <tr 
                        v-for="employee in employees" 
                        :key="employee.EmployeeID" 
                        @dblclick="handleEdit(employee)" 
                        
                        >
                        <td class="ms-out-left-white-16"></td>
                        <td class="ms-table-td ms-table-checkbox-row">
                            <label class="ms-checkbox-con">
                                <input type="checkbox" 
                                class="input-checkbox"  
                                v-model="selected"
                                :value="employee.EmployeeID"
                                @change="handleCheckbox"
                                name="selectedRecord"
                                number
                                >
                                <span class="ms-checkbox">
                                    <span class="ms-checkbox-tick icon icon-checkbox-active icon-16 checked"></span>
                                </span>
                            </label>
                        </td>
                        <td class="ms-table-td dymamic-col static-col text-left">
                            <div class="table-td-title ">
                                <span>{{employee.EmployeeCode ? employee.EmployeeCode : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col text-left">
                            <div class="table-td-title ">
                                <span>{{employee.EmployeeName ? employee.EmployeeName : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col text-left">
                            <div class="table-td-title">
                                <span>{{ getGender(employee.Gender) }}</span>
                            </div>    
                            
                        </td>
                        <td class="ms-table-td dymamic-col static-col text-center">
                            <div class="table-td-title">
                                <span>{{employee.DateOfBirth ? formatDate(employee.DateOfBirth) : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col text-left">
                            <div class="table-td-title">
                                <span>{{employee.IdentityNumber ? employee.IdentityNumber : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col text-center">
                            <div class="table-td-title">
                                <span>{{employee.IdentityDate ? formatDate(employee.IdentityDate) : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col" >
                            <div class="table-td-title">
                                <span>{{employee.IdentityPlace ? employee.IdentityPlace : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col">
                        <div class="table-td-title">
                            <span>{{employee.Address ? employee.Address : " "}}</span>
                        </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col" >
                            <div class="table-td-title">
                                <span>{{employee.PositionName ? employee.PositionName : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col" >
                            <div class="table-td-title float-left">
                                <span>{{ employee.DepartmentName }}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col">
                            <div class="table-td-title float-left">
                                <span>{{employee.Email ? employee.Email : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col" >
                            <div class="table-td-title float-left">
                                <span>{{employee.PhoneNumber ? employee.PhoneNumber : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col">
                            <div class="table-td-title float-left">
                                <span>{{employee.HotLine ? employee.HotLine : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col">
                            <div class="table-td-title float-left">
                                <span>{{employee.BankAccount ? employee.BankAccount : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col">
                            <div class="table-td-title float-left">
                                <span>
                                {{employee.BankName ? employee.BankName : " "}}
                                </span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col">
                            <div class="table-td-title float-left">
                                <span> {{employee.BankBranch ? employee.BankBranch : " "}}</span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col" >
                            <div class="table-td-title table-td-checkbox">
                                <span class="ms-checkbox-border disabled-color">
                                    
                                </span>
                            </div>    
                        </td>
                        <td class="ms-table-td dymamic-col static-col">
                            <div class="table-td-title table-td-checkbox">
                                <span class="ms-checkbox-border disabled-color">
                                    <span class="icon icon-16 icon-checkbox-grey rotate-90"></span>
                                </span>
                            </div>    
                        </td>
                        <td class="ms-table-td ms-td-function ">
                            <div class="dropdown dbl-button ">
                                <button class="btn dbl-button-default-left background-transparent" 
                                @click="handleEdit(employee)"
                                
                                >
                                    <div class="button__text ">
                                        <span class="btn-text">Sửa</span>
                                    </div>
                                </button>
                                <button class="btn dbl-button-default-right background-transparent showMENU" 
                                @click="btnShowMiniMenu(employee.EmployeeID,employee.EmployeeCode,employee.EmployeeName)"
                                    >   
                                    <div class="button__text eventDefault"
                                    :class="{borderBtnUpdate: isborderBtnUpdate == employee.EmployeeID}"
                                    >
                                        <div class="line"></div>
                                        <div class="icon-16 icon-down-blue icon btn-text eventDefault" ></div>
                                    </div>
                                </button>
                            </div>
                        </td>
                        <td class="ms-out-right-white-30"></td>
                        <td class="ms-out-right-grey-30"></td>
                        </tr>
                    </tbody>
            </table>
            <div class="ms-pagination">
                <div class="ms-pagination-inner">
                    <div class="pagination__left">
                        <div class="pagination__left-item">
                            <div class="pagination__left-totalRecord">  
                                <span>Tổng số: <b>{{ totalRecord  }}</b> bản ghi</span>   
                            </div>
                        </div>
                    </div>
                    <div class="pagination__right">
                        <div class="pagination__right-item">
                            <div class="pagination__right-combobox-record" @click='handlePaging'>
                                <div class="pagination-combobox-record">
                                    <div class="pagination-selected-options">
                                        <input type="text" class="combo-input" :value="numberPageVal" readonly="true">
                                    </div>
                                    <div class="pagination-button-record">
                                        <div class="btn-dropdown">
                                            <div class="icon icon-16 icon-downFull-black"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pagination-combobox-list" :class="{showPagingOptions:isShowPagingOptions}">
                                    <!-- <div class="pagination-combobox-item pagination-combobox-item-active">10 bản ghi trên 1 trang</div> -->
                                    <div class="pagination-combobox-item" 
                                    :class="{activeNumberRecord: activeNumberRecord == page }" 
                                    v-for="page in numberEntries" :key="page" 
                                    @click="showEntries(page)">{{ page }} bản ghi trên 1 trang</div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination__right-item">
                            <div class="pagination__number__list">
                                <BasePagination 
                                :maxPage="maxPage" 
                                :pageNumber="pageNumber" 
                                @nextPage="nextPage" 
                                @prevPage="prevPage"
                                @changePageNumber="changePageNumber" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ms-out-right-white-30"></div>
                <div class="ms-out-right-grey-30"></div>
            </div>
        </div>
    </div>
        </div> 
    </div>

    
    <div class="ms-component" >
        <div :class="{showMiniMenu: isMiniMenu}" 
        class="dropdown-menu" 
        id="miniMenu"
        ref="minuMenu" 
        style="top:0; right:-30px;"
        >
            <ul class="fix-list">
                <li class="fix-item">
                    <a href="#" class="fix-link" @click="handleClone">Nhân bản</a> 
                </li>
                <li class="fix-item" >
                    <a href="#" class="fix-link" @click="handleDelete">Xoá</a> 
                </li>
                <li class="fix-item">
                    <a href="#" class="fix-link">Ngưng sử dụng</a> 
                </li>
            </ul>
        </div>
    </div>

    <TheLoading :isLoading = "isShowLoading" />

    <EmployeeDetail 
    v-if="isShowDialog"
    @showDialogDetail ="showDialogDetail" 
    @loadData ="loadData"
    @getDataEmp="getData"
    @loadDepartName ="loadForm"
    :formMode ="formModeDetail"
    :EmpSelectedId ="EmpSelectedId" 
    :isRowSelected ="isRowSelected" 
    :isDepartmentName ="isDepartmentName"
    @formatDate ="formatDate"
    @caseToast ="caseToast"
    :allEmp="employees"
    /> 

    <BaseMessage 
    :showPopup="showPopupCha"
    :msg ="msgPopup"
    @popupDelete="deleteData"
    @popupDeleteMultiple="deleteMultipleData"
    @cancelPopup="cancelPopup"
    @showPopupDel = "handleDelete"
    />

    <BaseToast 
    :showToast="showToastCha"
    />

    </div> 
</template>
<script>
import axios from 'axios'
import EmployeeDetail from '../pages/EmployeeDetail.vue'
import TheLoading from '../base/TheLoading.vue'
import BaseMessage from '../base/BaseMessage.vue'
import BaseToast from '../base/BaseToast.vue'
import BasePagination from '../base/BasePagination.vue'
import * as Enum from '../../common/Enum'
import * as Sources from '../../common/Sources'

export default {
    name: "TheMain",
     data() {
        return {
            employees: null,
            department: null,
            isShowDialog: false,
            isShowLoading: false,
            EmpSelectedId: null,
            isRowSelected: {},
            formModeDetail: 0,
            isMiniMenu: false,
            empId: "",
            empName: "",
            empCode: "",
            totalRecord: 0,
            showPopupCha: "",
            msgPopup: "",
            showToastCha: 0,
            isDepartmentName: "", 
            isborderBtnUpdate: null,
            keyword: '', 
            isShowPagingOptions: false ,
            numberEntries: [10,20,30,50,100],
            currentEntries: 10,
            numberPageVal: "10 bản ghi trên 1 trang",
            activeNumberRecord: 10,
            pageNumber: 1,
            maxPage: 0,
            //checkbox
            selected: [],
            multipleOptions: false,
            disableDeleteAll: true,
            dataId: []
           
            
        }
    },

     created() {
       try {
        this.loadData() 
        
       } catch (error) {
            console.log(error)
       }
    },

    mounted() {
        var getWidthTable = this.$refs.tableEmp.clientWidth
        document.querySelector('.ms-pagination').style.width = (getWidthTable + 16) + 'px';
    },

    computed: {

        /**
         * CheckAll lấy tất cả ID push vào mảng selected
         * author: NVThuy(05/08/2022)
         */
        selectAll: {
            get: function () {
                return this.employees ? this.selected.length == this.employees.length : false;
            },
            set: function (value) {
                var selected = [];
                if (value) {
                    this.employees.forEach(function (employee) {
                        selected.push(employee.EmployeeID);
                    });
                }
                this.selected = selected;
            }
        },
    },

    components: {
      EmployeeDetail,
      TheLoading,
      BaseMessage,
      BaseToast,
      BasePagination,
    } ,
   
    methods: {
        
          /**
         * Load dữ liệu
         * author: NVThuy(05/08/2022)
         */
        loadData() {
            this.showLoading(true)
            setTimeout(() => {
               this.getData();
            },1000)      
        },

         /**
         * Lấy dữ liệu
         * author: NVThuy(05/08/2022)
         */
        getData(){
            var _this= this
             //Call Api --> axios 
             axios
            .get(`http://localhost:4350/api/v1/Employees/paging?keyword=${this.keyword}&pageSize=${_this.currentEntries}&pageNumber=${_this.pageNumber}`)
            .then(function(response) {
                 // Lấy dữ liệu api gán vào obj employees
                    _this.employees = response.data['Data']; 
                    // Tính tổng số bản ghi
                    _this.totalRecord = response.data['TotalCount'] 
                    // Tính trang cuối cùng
                    _this.maxPage = Math.floor((_this.totalRecord / _this.currentEntries) + 1) 
                    // Ẩn loading
                    _this.showLoading(false)
            })
        },

        /**
         * Hiển thị dữ liệu với tổng bản ghi bằng số lượng bản ghi đã chọn
         * author: NVThuy(20/08/2022)
         */
        showEntries(page) {
            this.currentEntries = page;
            this.numberPageVal = `${page} bản ghi trên 1 trang`
            this.activeNumberRecord = page
            this.getData()
        },

        /**
         * Hiển thị options số bản ghi trên 1 trang
         * author: NVThuy(20/08/2022)
         */
        handlePaging(){
            this.isShowPagingOptions = !this.isShowPagingOptions
        },

        /**
         * Tìm kiếm dữ mã hoặc tên nhân viên -> Hiển thị data trên table
         * author: NVThuy(20/08/2022)
         */
        searchData() {
            this.getData()
        },

        handleClone(){
            this.formModeDetail = 3
            this.showDialogDetail(true);
            this.EmpSelectedId = this.empId
        },
        /**
         * Toast (1- Thêm thành công ; 2- Sửa thàng công ) 
         * author: NVThuy(12/08/2022)
         */
        caseToast: function(caseToast) {
            if(caseToast == 1) {
                this.showToastCha = 1
            }
            else if(caseToast == 2) {
                this.showToastCha = 2
            }
            
        }, 
        
         /**
         * Hàm xoá data
         * author: NVThuy(11/08/2022)
         */
        deleteData(){
            var _this = this
                axios
            .delete(`http://localhost:4350/api/v1/Employees/${_this.empId}`)
            .then(function() {
                // Load Data
                _this.loadData() 
                // Ẩn popup
                _this.showPopupCha = 0
                // Hiển thị toast "Xoá thành công"
                _this.showToastCha = 3
            })
            .catch(function() {})
        },

        /**
         * Hàm xoá nhiều bản ghi
         * author: NVThuy(11/08/2022)
         */
        deleteMultipleData() {
            var _this = this
            axios.delete(`http://localhost:4350/api/v1/Employees/deleteMultiple?ids=${_this.dataId}`)
            .then(function () {
                        // Load Data
                _this.loadData() 
                // Ẩn popup
                _this.showPopupCha = 0
                // Hiển thị toast "Xoá thành công"
                _this.showToastCha = 3
            })
            .catch(function (error) {
                console.log(error.response.status);
            })
        },

        /**
         * Nhấn nút Huỷ trên Popup -> Ẩn popup
         * author: NVThuy(12/08/2022)
         */
        cancelPopup() {
            this.showPopupCha = 0
        },

        /**
         * Hàm hiện popup (2- Hiện popup "Bạn có muốn xoá [ mã nhân viên ] không ?")
         * author: NVThuy(05/08/2022)
         */
        handleDelete(){
            this.showPopupCha = Enum.popupMode.Delete
            this.msgPopup = `Bạn có  thực sự muốn xoá nhân viên <${this.empCode}> không ?`
        },

        /**
         * Hiện menu con
         * author: NVThuy(05/08/2022)
         */
         btnShowMiniMenu: function(id,code,name) {
            let _this = this
            
            // Gán id của nhân viên vào biến empId
            this.empId = id;
            // Gán name của nhân viên vào biến empName
            this.empName = name
            this.empCode = code
            this.isborderBtnUpdate = id
            let miniMenu = document.getElementById('miniMenu')
            
            // Bắt target khi nhấn vào nút có class="showMENU"
            let showMiniMenu = event.target.closest('.showMENU')    
            if(event.target == showMiniMenu)
            {   
                // Lấy toạ độ của button show Menu con
                var rect = showMiniMenu.getBoundingClientRect();
                // Hiện menu con
                _this.isMiniMenu = true
                
                // Hiện menu con ở vị trí dưới button show menu con
                miniMenu.style.top = `${rect.top < 500 ? rect.top - 15 : rect.top - 130}px `
                miniMenu.style.right = '-30px'
            }
         },
           
        /**
         * Ẩn menu con
         * author: NVThuy(05/08/2022)
         */
        targetDefault(event) {
            let _this = this
            let showMiniMenu = event.target.closest('.showMENU')
            let showRecordOptions = event.target.closest('.pagination-combobox-list')
            // Khi click ra bên ngoài Menu con thì sẽ ẩn menu con đi
            if(event.target != showMiniMenu )
            {
                _this.isMiniMenu = false
                this.isborderBtnUpdate = false
            }
            else if (event.target != showRecordOptions){
                _this.isShowPagingOptions = false
            }
        },
      
        /**
         * Định dạng dữ liệu
         * author: NVThuy(05/08/2022)
         */
        formatDate(date) {
             try {
                if(date) {
                date = new Date(date);
                let getDate = date.getDate();
                getDate = getDate < 10 ? `0${getDate}` : getDate;
                let getMonth = date.getMonth() + 1;
                getMonth = getMonth < 10 ? `0${getMonth}` : getMonth
                let getYear = date.getFullYear()
                date = `${getDate}/${getMonth}/${getYear}`;
            }
            return date;
             } catch (error) {
                console.log(error)
             }
        },
        
         /**
         * Nhấn nút refresh load lại dư liệu
         * author: NVThuy(05/08/2022)
         */
        refreshOnClick() {
            this.loadData();
        },

        /**
         * Click vào nút thêm show Dialog
         * @param (Boolean) isShow: true - hiển thị , false - ẩn
         * author: NVThuy(05/08/2022)
         */
        btnAddEmployee() {
        // Dữ liệu trống
        this.isRowSelected = {};
        // Form Thông tin nhân viên ở dạng thêm
        this.formModeDetail = 0; 
        // Id nhân viên = null
        this.EmpSelectedId = null;
        // Hiện Form Thông tin nhân viên
        this.showDialogDetail(true);
        },

         /**
         * Double Click vào hàng trong table show Dialog và hiển thị data của hàng đó
         * @param (Boolean) employee: true - hiển thị , false - ẩn
         * author: NVThuy(05/08/2022)
         */
        handleEdit(employee) 
        { 
            // Ẩn menu con
            this.isMiniMenu = false
            // Form Thông tin nhân viên ở dạng sửa
            this.formModeDetail = 1;
            // Lấy id của nhân viên 
            this.EmpSelectedId = employee.EmployeeID;
            // Hiện form thông tin nhân viên
            this.showDialogDetail(true);
        },

        /**
         * Hiển thị dialog
         * author: NVThuy(05/08/2022)
         */
        showDialogDetail(isShow){
            this.isShowDialog = isShow
        },

         /**
         * Hiển thị loading
         * author: NVThuy(05/08/2022)
         */
        showLoading(isLoading){
            this.isShowLoading = isLoading;
        },

        /**
         * Render Gender
         * author: NVThuy(12/08/2022)
         */
        getGender(value) {
            if(value == 0) 
            {
               return 'Nữ'
            }
            else if(value == 1)
            {
                return 'Nam'
            }
            else if(value == 2){
                return 'Khác'
            }
            else 
            {
                return ""
            }
        },

        /**
         * trang tiếp theo
         * author: NVThuy(12/08/2022)
         */
        nextPage() {
            if (this.pageNumber < this.maxPage) {
                this.pageNumber++;
                this.getData();
            }
        },
        /**
         * trang trước 
         * author: NVThuy(12/08/2022)
         */
        prevPage() {
            if (this.pageNumber > 1) {
                this.pageNumber--;
                this.getData();
            }
        },

        /**
         *  Gán trang hiện tại
         * author: NVThuy(12/08/2022)
         */
        changePageNumber(selectedPage) {
            this.pageNumber = selectedPage;
            this.getData();
        },
          
        /**
         * Xử lý sự kiện check vào checkAll
         * author: NVThuy(12/08/2022)
         */
        handleCheckboxAll(event) {
        // Xét tbody của bảng:
        let tbody = event.target.closest("table").childNodes[1];
        // Xét tất cả các checkbox trừ checkAll:
        let records = tbody.querySelectorAll("[name='selectedRecord']");
        let flag = 0
        // Chọn tất cả các bản ghi, hiển thị nút xóa hàng loạt
        if (event.target.checked) {
            
            records.forEach((record) => {
                flag = 1
                record.closest("tr").classList.add("selectRow");
            })
        }
        // Bỏ chọn tất cả các bản ghi, ẩn nút xóa hàng loạt
        else {
            records.forEach((record) => {
                record.closest("tr").classList.remove("selectRow");
            })
        }

        // Nếu có checkbox = true thì hiện nút xóa hàng loạt
        if (flag == 1) {
            this.disableDeleteAll = false;
        } else {
            this.disableDeleteAll = true;
            this.multipleOptions = false;
        }
        
        },

        /**
         * Xử lý sự kiện check vào checkItem
         * author: NVThuy(12/08/2022)
         */
        handleCheckbox(event) {
                let flag = 0
                if (event.target.checked) {
                    // Đánh dấu bản ghi:
                    event.target.closest("tr").classList.add("selectRow");
                    flag = 1
                }
                else {
                    // Bỏ đánh dấu bản ghi:
                    event.target.closest("tr").classList.remove("selectRow");
                }
              
            // Nếu có checkbox = true thì hiện nút xóa hàng loạt
            if (flag == 1) {
                this.disableDeleteAll = false;
            } else {
                this.disableDeleteAll = true;
                this.multipleOptions = false;
            }

        },

        /**
         * Đóng/ Mở nút xoá nhiều bản ghi
         * author: NVThuy(12/08/2022)
         */
        handleOpenDeleteAll() {
            this.multipleOptions = !this.multipleOptions;
        },

        /**
         * Xử lý sự kiện xoá nhiều bản ghi
         * author: NVThuy(12/08/2022)
         */
        handleDeleteAll(){
            var _this = this
            let data = [];
            this.showPopupCha = Enum.popupMode.Deletes
            this.msgPopup = Sources.popupMsg.deleteMsg
            // Lấy id của các bản ghi được select
            this.selected.forEach((select) => {
                data.push(select);
                _this.dataId = data.join("/");
            })
        },

        /**
         * Download file excel
         * author: NVThuy(12/08/2022)
         */
        exportTableToExcel(){
            try {
                window.open(`http://localhost:4350/api/v1/Employees/Export?keyword=${this.keyword}`, 'Download')
            } catch (e) {
                console.log(e);
            }
        }   
    },
    
}
</script>