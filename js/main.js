function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('pavan').style.opacity="0.5";
    document.querySelector('body').style.overflow='hidden';
    
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('pavan').style.opacity="1";
    document.querySelector('body').style.overflow="visible";
}   

