<template>
    <div class="ms-popup">
        <div class="popup" >
            <div class="popup-form">
                <div class="popup-header">
                    <div class="popup-header-title">
                        <div class="popup-header-title-inner">
                            <div class="popup-title">Thông tin nhân viên</div>
                            <label class="ms-checkbox-con">
                                <input type="checkbox" class="input-checkbox" >
                                <span class="ms-checkbox">
                                    <span class="ms-checkbox-tick icon icon-checkbox-active icon-16 checked"></span>
                                </span>
                                <span class="ms-lable-con-lable">Là khách hàng</span>
                            </label>
                            <label class="ms-checkbox-con">
                                <input type="checkbox" class="input-checkbox">
                                <span class="ms-checkbox">
                                    <span class="ms-checkbox-tick icon icon-checkbox-active icon-16 checked"></span>
                                </span>
                                <span class="ms-lable-con-lable">Là nhà cung cấp</span>
                            </label>
                        </div>
                    </div>
                    <div class="popup-header-close">
                        <div class="icon icon-help icon-24 cursor-pointer"></div>
                        <div class="icon icon-close icon-24 cursor-pointer" id="btnClose" @click="btnCloseDetail"></div>
                    </div>
                </div>
                <div class="popup-content">
                    <div class="popup-body">
                        <div class="popup-body-item">
                            <div class="popup-item w-50 p-r-26">
                                <div class="row-input">
                                    <div class="w-40 p-r-6">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Mã</div>
                                                <div class="ms-input-title-require"> *</div>
                                            </div>
                                                <input type="text" class="input-normal" id="txtEmpCode" 
                                            Required
                                            ref="txtEmpCode"
                                            v-model="employee.EmployeeCode"
                                            @blur="validateInput"
                                            @input="changeInput()"
                                                >
                                        </div>
                                    </div>
                                    <div class="w-60">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Tên</div>
                                                <div class="ms-input-title-require"> *</div>
                                            </div>
                                                <input type="text" class="input-normal" id="txtEmpName" 
                                                v-model.lazy="employee.EmployeeName" 
                                                @blur="validateInput"
                                                ref="txtEmpName" 
                                                @input="changeInput()"
                                                Required
                                               
                                                >
                                        </div>
                                    </div>
                                </div>
                                <div class="ms-combo-input">
                                    <div class="ms-input">
                                        <div class="flex m-b-5 ms-input-lable">
                                            <div class="ms-input-title">Đơn vị</div>
                                            <div class="ms-input-title-require"> *</div>
                                        </div>
                                        <div class=""> 
                                            <!-- combobox-input -->
                                            <!-- <div class="selected-options department" >
                                                <select 
                                                name="donvi" 
                                                id="empDeparment" 
                                                style="padding: 0 8px;"
                                                ref="txtEmpDeparment" 
                                                class="w-100 combo-input"
                                                v-model.lazy="employee.DepartmentID"  
                                                @blur="validateInput" 
                                                @input="changeInput()"
                                                Required
                                                    >
                                                    <option value="11452b0c-768e-5ff7-0d63-eeb1d8ed8cef">Tổng công ty</option>
                                                    <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">Phòng kế toán</option>
                                                    <option value="17120d02-6ab5-3e43-18cb-66948daf6128">Phòng bảo vệ</option>
                                                    <option value="469b3ece-744a-45d5-957d-e8c757976496">Phòng hỗ trợ khách hàng</option>
                                                    <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">Khối sản xuất</option>
                                            
                                            </select>
                                            </div>
                                            <div class="combo-options flex">
                                                <div class="btn-dropdown ">
                                                    <div class="icon icon-downFull-black icon-16"></div> 
                                                </div>
                                            </div>  -->
                                            <BaseCombobox 
                                            id="departmentName" 
                                            class="combobox" 
                                            Required
                                            value="" url="http://localhost:4350/api/v1/Departments" 
                                            propValue="DepartmentID" 
                                            propText="DepartmentName" 
                                            @blur="validateInput" 
                                            @input="changeInput()"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="ms-combo-input">
                                    <div class="ms-input">
                                        <div class="flex m-b-5 ms-input-lable">
                                            <div class="ms-input-title">Chức danh</div>
                                        </div>
                                        <input type="text" 
                                        class="input-normal" 
                                        id="txtEmpEmployeePosition" 
                                        v-model.lazy="employee.PositionName" 
                                        @input="changeInput()"
                                        ref="txtEmpEmployeePosition" >    
                                    </div>
                                </div>
                            </div>
                            <div class="popup-item w-50">
                                <div class="row-input">
                                    <div class="w-40 p-r-6">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Ngày sinh</div>
                                            </div>
                                            <div class="form-date">
                                                <input type="date" tabindex="0" 
                                                class="input-date" 
                                                id="txtEmpDate" 
                                                v-model="employee.DateOfBirth"
                                                DataType="Date" 
                                                @input="changeInput()"
                                                ref="EmpDateOfBirth"
                                                    
                                            >
                                                    <!-- <input type="text" class="input-normal" 
                                                    style="pointer-events: none; width: 120px; position: absolute; left: 0" id="fakeInput">  -->
                                                <span class="icon icon-24 icon-calendar btn-date"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-60 p-l-10">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Giới tính</div>
                                            </div>
                                            <div class="ms-radio-group flex">
                                                <div class="ms-radio-item">
                                                    <input type="radio" value="1" id="radioMale" class="input-radio" 
                                                    ref="radioMale" v-model.lazy="employee.Gender"
                                                    @input="changeInput()"
                                                    
                                                   >
                                                    <span class="ms-radioButton">
                                                        <span class="ms-radio-border  "></span>
                                                        <span class="ms-radio-tron  "></span>
                                                    </span>
                                                    <span class="ms-radio-lable">Nam</span>
                                                </div>
                                                <div class="ms-radio-item">
                                                    <input type="radio" value="0" id="" class="input-radio" v-model.lazy="employee.Gender"
                                                    @input="changeInput()"
                                                   >
                                                    <span class="ms-radioButton">
                                                        <span class="ms-radio-border  "></span>
                                                        <span class="ms-radio-tron  "></span>
                                                    </span>
                                                    <span class="ms-radio-lable">Nữ</span>
                                                </div>
                                                    <div class="ms-radio-item">
                                                    <input type="radio" value="2" id="" class="input-radio" v-model.lazy="employee.Gender"
                                                    @input="changeInput()"
                                                  >
                                                    <span class="ms-radioButton">
                                                        <span class="ms-radio-border  "></span>
                                                        <span class="ms-radio-tron  "></span>
                                                    </span>
                                                    <span class="ms-radio-lable">Khác</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-input">
                                    <div class="w-60 p-r-6">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Số CMND</div>
                                            </div>
                                            <input type="text" 
                                            class="input-normal" 
                                            id="txtEmpIdentityNumber" 
                                            v-model.lazy="employee.IdentityNumber"
                                            @input="changeInput()"
                                          >
                                        </div>
                                    </div>
                                    <div class="w-40">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Ngày cấp</div>
                                        
                                            </div>
                                            <div class="form-date">
                                                <input type="date" tabindex="0" 
                                                placeholder="DD/MM/YYYY" 
                                                class="input-date" 
                                                v-model.lazy="employee.IdentityDate" 
                                                id='EmpIdentityDate'
                                                ref="EmpIdentityDate"
                                                DataType="Date" 
                                                @input="changeInput()">
                                                <span class="icon icon-24 icon-calendar btn-date"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ms-combo-input">
                                    <div class="ms-input">
                                        <div class="flex m-b-5 ms-input-lable">
                                            <div class="ms-input-title">Nơi cấp</div>
                                        </div>
                                        <input type="text" 
                                        class="input-normal" 
                                        id="txtEmpIdentityPlace" 
                                        v-model.lazy="employee.IdentityPlace"
                                        @input="changeInput()"
                                     >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="popup-body-item">
                            <div class="popup-item w-100">
                                <div class="ms-combo-input">
                                    <div class="ms-input">
                                        <div class="flex m-b-5 ms-input-lable">
                                            <div class="ms-input-title">Địa chỉ</div> 
                                        </div>
                                        <input type="text" 
                                        class="input-normal" 
                                        id="txtEmpAddress" 
                                        v-model.lazy="employee.Address"
                                        @input="changeInput()"
                                      >
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div class="popup-item w-100">
                            <div class="row-input">
                                <div class="w-25 p-r-6">
                                    <div class="ms-input">
                                        <div class="flex m-b-5 ms-input-lable">
                                            <div class="ms-input-title">ĐT di động </div>
                                        </div>
                                        <input type="text" 
                                        class="input-normal" 
                                        id="txtEmpPhoneNumber" 
                                        v-model.lazy="employee.PhoneNumber"
                                        @input="changeInput()"
                                      >
                                    </div>
                                </div>
                                <div class="w-25 p-r-6">
                                    <div class="ms-input">
                                        <div class="flex m-b-5 ms-input-lable">
                                            <div class="ms-input-title">ĐT cố định</div>
                                        </div>
                                        <input type="text" 
                                        class="input-normal"  
                                        id="txtEmpTelephoneNumber" 
                                        v-model.lazy="employee.HotLine"
                                        @input="changeInput()"
                                      >
                                    </div>
                                </div>
                                <div class="w-25 p-r-6">
                                    <div class="ms-input">
                                        <div class="flex m-b-5 ms-input-lable">
                                            <div class="ms-input-title">Email</div>
                                        </div>
                                        <input type="text" class="input-normal"  id="txtEmpEmail" 
                                        v-model.lazy="employee.Email" DataType="Email"
                                        @input="changeInput()"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="popup-body-item">
                            <div class="popup-item w-100">
                                <div class="row-input">
                                    <div class="w-25 p-r-6">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Tài khoản ngân hàng</div>
                                            </div>
                                            <input type="text" 
                                            class="input-normal" 
                                            id="txtEmpBankAccountNumber" 
                                            v-model.lazy="employee.BankAccount"
                                            @input="changeInput()">
                                        </div>
                                    </div>
                                    <div class="w-25 p-r-6">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Tên ngân hàng</div>
                                            </div>
                                            <input type="text" class="input-normal" id="txtEmpBankName" 
                                            v-model.lazy="employee.BankName"
                                            @input="changeInput()">
                                        </div>
                                    </div>
                                    <div class="w-25 p-r-6">
                                        <div class="ms-input">
                                            <div class="flex m-b-5 ms-input-lable">
                                                <div class="ms-input-title">Chi nhánh</div>
                                            </div>
                                            <input type="text" class="input-normal" 
                                            id="txtEmpBankBranchName" 
                                            v-model.lazy="employee.BankBranch"
                                            @input="changeInput()">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <div class="divide"></div>
                        <div class="flex w-100 popup-footer-inner">
                            <div class="popup-footer-left">
                                <BaseButton classBtn="btn btn-normal-default" textBtn="Huỷ" @click="cancelEmpDetail" ></BaseButton>
                            </div>
                            <div class="popup-footer-right">
                                <BaseButton classBtn="btn btn-normal-default" textBtn="Cất" @click="saveForm" ></BaseButton>
                                <BaseButton classBtn="btn btn-normal-green" textBtn="Cất và Thêm"  @click="storeForm" ></BaseButton>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BaseMessage 
        :showPopup="showPopupEmpDetail"
        :msg ="msgPopup"
        :msgError="msgPopupError"
        @cancelPopup="cancelPopup"
        @saveForm="saveForm"
        @cancelEmpDetail="cancelEmpDetail"
        />
    </div>
</template>
<script>
import axios from 'axios'
import BaseMessage from '../base/BaseMessage.vue'
import BaseButton from '../base/BaseButton.vue'
import BaseCombobox from '../base/BaseCombobox.vue'
import { toRaw } from 'vue';
import {getDate} from '../../constants/getDate.js'
import { getDepartment, getDepartmentID } from "../../js/getDepartment";
import {getEmployeeMaxCode} from '../../js/getNewCode'
import * as Enum from '../../common/Enum'
import * as Sources from '../../common/Sources'

export default {
    name: 'EmployeeDetail',
    props: ["isShow",
    "isRowSelected",
    "EmpSelectedId",
    "formMode","isDepartmentName",
    "caseToast","allEmp","codemax"],
    components: {
        BaseMessage,
        BaseButton,
        BaseCombobox
    },
    mounted() {
            // Form thông tin hiện tại là form thêm nhân viên
            this.currentFormMode = this.formMode 

            // Nếu form thông tin là form thêm hoặc form nhân bản
            // thì sẽ hiện mã nhân viên tự động và focus
            if(this.formMode == Enum.formMode.add || this.formMode == Enum.formMode.clone)
            {
                try {
                    setTimeout(async () => {
                        let code = await getEmployeeMaxCode();
                        this.$refs.txtEmpCode.value = code;
                    });
                    this.$refs.txtEmpCode.focus()
                } catch (error) {
                    console.log(error);
                }
            }
            if(this.formMode == Enum['formMode'].add)
            {
                this.$refs.radioMale.checked = true
            }
            // Nếu form thông tin là form sửa hoặc form nhân bản
            // thì sẽ hiện thông tin hoặc clone thông tin có mã là đầu vào
            if (this.formMode == Enum.formMode.update || this.formMode == Enum.formMode.clone)
            {
                this.bindingData(this.EmpSelectedId)
            }
    },
    
    
    methods: {
         getDepartmentID(name) {
            let departmentId;

            axios.get(`http://localhost:4350/api/v1/Departments`)
            .then(function (response) {
                // department = response.data;
                response.data.forEach(data => {
                    if(name == data.DepartmentName)
                    {
                        departmentId = data.DepartmentID;
                    }  
                }); 
            })
            .catch(function (error) {
                console.log(error);
            })

            return departmentId;
        },
        /**
         * Binding data từ get Data -> input trên form thông tin nhân viên
         * author: NVThuy(12/08/2022)
         */
        bindingData(value) {
            var me = this.$el
            var _this = this
            axios
            .get(`http://localhost:4350/api/v1/Employees/${value}`) 
            .then(function(response) {
                _this.employee = response.data

                let formatDate = _this.employee['DateOfBirth'];
                let formatIdentityDate = _this.employee['IdentityDate'];
                // _this.departmentName = _this.employee['DepartmentName']
                setTimeout(async () => {
                    if (_this.employee.DepartmentID) {
                        let department = await getDepartment(_this.employee.DepartmentID);
                        me.querySelector("#departmentName input").value = department.DepartmentName;
                    }
                }, 10);

                _this.employee['DateOfBirth'] = getDate(formatDate)
                _this.employee['IdentityDate'] = getDate(formatIdentityDate)
            })
            .catch(function(res) 
                {
                    console.log(res)
                })
           
        },

        /**
         * Hàm thêm data
         * author: NVThuy(05/08/2022)
         */
        insertData() {
            var me = this.$el
            var _this = this;
            if (this.employee['Gender'] == null)
            {
            this.employee['Gender'] = "1"
            }
            this.employee['Gender'] = parseInt(this.employee['Gender'])
            this.employee.DepartmentName = me.querySelector("#departmentName input").value
            setTimeout(async () => {
                let a = await getDepartmentID(_this.employee.DepartmentName);
                _this.employee.DepartmentID = a
                axios
                .post("http://localhost:4350/api/v1/Employees/", _this.employee)
                .then(function() {
                    _this.$emit('caseToast',1)
                    _this.$emit('loadData');
                })
                .catch(function(error) {
                    let response = error.response
                    
                    switch(response.status)
                    {
                        case 400:
                            var userMsg = response.data["userMsg"];
                            console.log(userMsg)
                            break;
                        default:
                            break;
                    }
                })
            }, 10);  
        },

         /**
         * Hàm sửa data
         * author: NVThuy(05/08/2022)
         */
        updateData() {
            var _this = this;
            var me = this.$el

            this.employee['Gender'] = parseInt(this.employee['Gender'])
            this.employee.DepartmentName = me.querySelector("#departmentName input").value
            setTimeout(async () => {
                let a = await getDepartmentID(_this.employee.DepartmentName);
                _this.employee.DepartmentID = a
                axios
                .put(`http://localhost:4350/api/v1/Employees/${_this.EmpSelectedId}`,_this.employee)
                .then(function() {
                    console.log(_this.employee);
                    _this.$emit('caseToast',2)
                    _this.$emit('loadData')
                    
                })
            .catch(function() {})
            }, 10);
      
            
            
        },

        

          /**
         * Nhấn nút Cất và thêm sẽ lưu dữ liệu vào api và không ẩn form chi tiết thông tin
         * author: NVThuy(05/08/2022)
         */
        storeForm() {
            var _this = this;
            // Validate dữ liệu
            this.msgPopupError = []
            let isValid =  this.validateForm()
            let checkSameCode = this.checkSameCode()
           
             /**
             * Nếu formMode = 0 -> thêm data
             * Nếu formMode = 1 -> sửa data
             * author: NVThuy(05/08/2022)
             */
            if(this.formMode == Enum.formMode.add || this.formMode == Enum.formMode.clone)
            {
                if(isValid && checkSameCode == 0)
                {
                    _this.insertData()
                    _this.showPopupEmpDetail = 0
                    setTimeout(() => {
                       _this.resetForm() 
                    },100);
                }
                else{
                    _this.showPopupEmpDetail = Enum.popupMode.Validate
                    event.preventDefault(); 
                }
            }
            else  
            {  
                if(isValid)
                {
                    _this.updateData()
                    _this.showPopupEmpDetail = 0
                }
                else{
                    _this.showPopupEmpDetail = Enum.popupMode.Validate
                    event.preventDefault(); 
                }
            }
            
        },

        /**
         * Nhấn nút Cất sẽ lưu dữ liệu vào api và ẩn form chi tiết thông tin
         * author: NVThuy(12/08/2022)
         */
        saveForm() {
        var _this = this;
        // Validate dữ liệu
        this.msgPopupError = []
        let isValid =  this.validateForm()
        let checkSameCode = this.checkSameCode()
            /**
         * Nếu formMode = 0 -> thêm data
         * Nếu formMode = 1 -> sửa data
         * author: NVThuy(05/08/2022)
         */
        if(this.formMode == Enum.formMode.add  || this.formMode == Enum.formMode.clone)
        {
            if(isValid && checkSameCode == 0)
            {
                _this.insertData()
                _this.showPopupEmpDetail = 0
                _this.closeFormDetail()
            }
            else{
                _this.$emit('showDialogDetail', true);
                _this.showPopupEmpDetail = Enum.popupMode.Validate
                event.preventDefault(); 
            }
        }
        else
        {  
            if(isValid)
            {
                _this.updateData() 
                _this.showPopupEmpDetail = 0
                _this.closeFormDetail()     
            }
            else{
                _this.showPopupEmpDetail = Enum.popupMode.Validate
                event.preventDefault(); 
            }
        }
        this.changeInputVal = 0
          
        },


        /**
         * Làm trống các ô input , selected
         * author: NVThuy(10/08/2022)
         */
        resetForm() 
        {
            let _this = this.$el
            _this.querySelectorAll('input').forEach((input)=> {
                input.value = ""
                input.classList.remove('border-red')
            })
            _this.querySelectorAll('select').forEach((select)=> {
                select.value = ""
                select.classList.remove('border-red')
            })
        },

         /**
         * Mỗi lần input thay đổi value nhảy vào hàm này
         * author: NVThuy(05/09/2022)
         */
        changeInput(){  
            // Đánh dấu input thay đổi 
            this.changeInputVal = 1
        },

         /**
         * Bấm nút huỷ tắt popup
         * author: NVThuy(13/08/2022)
         */
        cancelPopup() {
            this.showPopupEmpDetail = 0
            this.changeInputVal = 0
        },

         /**
         * Nhấn nút X -> đóng dialog
         * author: NVThuy(05/08/2022)
         */
        btnCloseDetail() {
            if(this.changeInputVal == 1)
            {
              this.msgPopup= Sources.popupMsg.storeMsg
              this.showPopupEmpDetail = Enum.popupMode.ChangeInputVal
            }
            else 
            {
                this.$emit('showDialogDetail', false);
                this.resetForm();
            }
            this.$emit('getDataEmp');
            
        },

        /**
         * Ẩn form chi tiết nhân viên
         * author: NVThuy(12/08/2022)
         */
        cancelEmpDetail() {
            this.showPopupEmpDetail = 0
            this.$emit('showDialogDetail', false);
            this.$emit('getDataEmp');
            this.resetForm(); 
        },

        /**
         * Đóng form thông tin
         * author: NVThuy(12/08/2022)
         */
        closeFormDetail(){
              setTimeout(() => {
                    this.$emit('showDialogDetail', false);
            }, 1000);
        },

        /**
         * Kiểm tra trùng mã
         * author: NVThuy(12/08/2022)
         */
        checkSameCode() {
            var _this = this
            var me = this.$el
            let id = me.querySelector('#txtEmpCode')
            let txtEmpCode = this.$refs.txtEmpCode.value 
            let checkSameCode = 0

            if(this.formMode == Enum.formMode.add)
            {
                for(let i = 0 ; i < this.allEmp.length ; i++) {
                    if( txtEmpCode === this.allEmp[i].EmployeeCode) {
                        _this.showPopupEmpDetail = Enum.popupMode.SameCode
                        _this.infoErrorRequire(id,0)
                        _this.msgSameCode = `Mã nhân viên <${_this.employee.EmployeeCode}> đã tồn tại trong hệ thống vui lòng kiểm tra lại.`
                        _this.msgPopupError.unshift(_this.msgSameCode);
                        checkSameCode = 1
                    }   
                }
                
            }
            this.msgPopupError = Array.from(new Set(toRaw(_this.msgPopupError)))
            return checkSameCode
        },

          /**
         * Hàm validate input khi blur khỏi input
         * author: NVThuy(05/08/2022)
         */
         validateInput () {
            var value = event.currentTarget.value;
            if(!value) 
            {
                event.currentTarget.classList.add('border-red')
                event.currentTarget.setAttribute('title',Sources.errorsVI.errorEmpty)
            }
            else{
                event.currentTarget.classList.remove('border-red')
                event.currentTarget.setAttribute('title',"")
            }
         },

        /**
         * Thông báo error input ( 0 - lỗi , khác - không lỗi)
         * author: NVThuy(05/08/2022)
         */
         infoErrorRequire(value,number) {
            if(number == 0) 
            {
                value.classList.add("border-red");
                value.setAttribute("title", "Không được để trống");
            }
            else
            {
                value.setAttribute("title", "");
                value.classList.remove("border-red");
            }
         },

        /**
         * kiểm tra lại các input khi save data
         * author: NVThuy(05/08/2022)
         */
        validateForm() {
            let me = this.$el,
            isValid = true;

            var _this = this
            // Lấy input txtEmpCode
            let id = me.querySelector('#txtEmpCode')
            if(!id.value)
            {
                isValid = false;
                this.infoErrorRequire(id,0)
                this.msgPopupError.push(Sources.errorsVI.errorCodeEmpty)
            }
            else
            {
                this.infoErrorRequire(id,1)
            }
    
            // Lấy input txtEmpName
            let name = me.querySelector('#txtEmpName')
            if(!name.value)
            {
                isValid = false;
                this.infoErrorRequire(name,0)
                this.msgPopupError.push(Sources.errorsVI.errorNameEmpty)
            }
            else
            {
                this.infoErrorRequire(name,1)
            }

            // Lấy empDeparment
            let department = me.querySelector('#departmentName input')
            if(!department.value)
            {
                isValid = false;
                this.infoErrorRequire(department,0)
                this.msgPopupError.push(Sources.errorsVI.errorDepartmentEmpty)
            }
            else
            {
                this.infoErrorRequire(department,1)
            }
            
            // Validate email
            me.querySelectorAll('[DataType="Email"]').forEach((email) => {
            if (!email.value
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) && email.value.replace(/\s/g, '').length > 0) {
                isValid = false;

                this.infoErrorRequire(email,0)
                this.msgPopupError.push(Sources.errorsVI.errorEmailFormat)
            } else {
                this.infoErrorRequire(email,1)
            }
            })
            
            // Validate ngày sinh không được lớn hơn ngày cấp CCCD/CMT
            let DateOfBirthID = me.querySelector('#txtEmpDate')
            let IdentityDateID = me.querySelector('#EmpIdentityDate')

            let DateOfBirthFormat = new Date(DateOfBirthID.value)
            let IdentityDateFormat = new Date(IdentityDateID.value)

            if(DateOfBirthFormat >= IdentityDateFormat)
            {
                isValid = false;
                this.infoErrorRequire(DateOfBirthID,0)
                this.infoErrorRequire(IdentityDateID,0)
                this.msgPopupError.push(Sources.errorsVI.errorIdentityDate)
            }
            else
            {
                this.infoErrorRequire(DateOfBirthID,1)
                this.infoErrorRequire(IdentityDateID,1)
            }

            // Validate trường Date
            me.querySelectorAll('[DataType = "Date"]').forEach((date) => {
              
                let today = new Date()
                let time = new Date(date.value);

                if (time > today && date.value) {
                    isValid = false;
                    this.infoErrorRequire(date,0)
                    this.msgPopupError.push(Sources.errorsVI.errorDate)
                } else {
                    this.infoErrorRequire(date,1)
                }
            })
            
            // Sử dụng draw để chuyển proxy thành mảng 
            // sử dụng set để loại bỏ những phần tử trùng trong mảng
            this.msgPopupError = Array.from(new Set(toRaw(_this.msgPopupError)))
            return isValid;
        },
    },
   
    data() {
        return {
            employee: { },
            showPopupEmpDetail: "",
            error: [],
            msgPopup: "",
            msgPopupError: [],
            changeInputVal: 0,  
            currentFormMode: 0,
            departmentID: "",
            msgSameCode: ""
        }
    },
   
}
</script>
<style scoped>
  
</style>