<template>
    <div>
        <div class="toast__box" id="toast" v-if="showToast == 1">
            <BaseTypeToast typeToast="toast--success"  iconToast="icon-success-toast">
                <template v-slot:textToast>
                        {{ msgToast.insertEmployee.successEmployee }}
                </template>
            </BaseTypeToast>
        </div>
        <div class="toast__box" id="toast" v-if="showToast == 2">
            <BaseTypeToast typeToast="toast--success"  iconToast="icon-success-toast">
                <template v-slot:textToast>
                        {{ msgToast.updateEmployee.successEmployee }}
                </template>
            </BaseTypeToast>
        </div>
        <div class="toast__box" id="toast" v-if="showToast == 3">
            <BaseTypeToast typeToast="toast--success"  iconToast="icon-success-toast">
                <template v-slot:textToast>
                        {{ msgToast.deleteEmployee.successEmployee }}
                </template>
            </BaseTypeToast>
        </div>
    </div>
</template>
<script>
import BaseTypeToast from './BaseTypeToast.vue'
export default {
    name: 'BaseToast',
    props: {
        showToast: {
            type: Number,
        }
    },
    data() {
        return {
            msgToast: {
                insertEmployee: {
                    successEmployee: "Thêm nhân viên mới thành công !",
                    errorEmployee: "Thêm nhân viên mới không thành công !",
                },
                updateEmployee: {
                    successEmployee: "Sửa nhân viên mới thành công !",
                    errorEmployee: "Sửa nhân viên mới không thành công !",
                },  
                deleteEmployee: {
                    successEmployee: "Xoá nhân viên thành công !",
                    errorEmployee: "Xoá nhân viên không thành công !",
                },  
            }
        }
    },
    components: {
        BaseTypeToast
    }
}
</script>
<style scoped>

#toast {
    position: fixed;
    top: 32px;
    right: 24px;
    z-index: 10000;
}
#toast--warning .toast__icon {
    color: #FFE7AF;
}

#toast--warning .toast__close {
    color: #FFE7AF;
}

#toast--error .toast__icon {
    color: #FFCECE;
}

#toast--error .toast__close {
    color: #FFCECE;
}
#toast--success .toast__icon {
    color: #baffe7;
}

#toast--success .toast__close {
    color: #baffe7;
}

#toast--info .toast__icon {
    color: #d8eaff;
}

#toast--info .toast__close {
    color: #d8eaff;
}


</style>