<template>
    <div class="toast" :id="typeToast">
        <div class="toast__icon icon icon-24" :id="iconToast"> 
        </div>
         <div class="toast__body">
            <slot name="textToast"></slot>
        </div>
        <div class="toast__close icon icon-24 icon-close-toast">
        </div>
    </div>
</template>
<script>

export default {
    name: 'BaseToast',
    data() {
        return {
           
        }
    },
    props: {
        typeToast: {
            type: String,
        },
        iconToast: {
            type: String,
        }
    }
}
</script>
<style scoped>

.toast {
    margin-top: 4px;
    width: 300px;
    height: 48px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0 ,0 , 0.16);
    animation: toastShow 1s ease , toastHide 1s ease 3s forwards;
}

@keyframes toastShow {
    from {
        transform: translateX(calc(100% + 24px));
    }
    to {
        transform: translateX(0);
    }
}

@keyframes toastHide {
    to {
       opacity: 0;
    }
}


.toast__icon {
    padding: 0 16px;
    font-size: 20px;
}

.toast__body {
    flex: 1;
    color: #000000;
    padding: 0 8px;
}

.toast__close {
    padding: 0 16px;
    font-size: 24px;
    cursor: pointer;
}
.toast__close:hover {
    opacity: 80%;
}

</style>