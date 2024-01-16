function chlang(){
    link1.textContent="მთავარი";
    link2.textContent="ჩვენს შესახებ";
    link3.textContent="კურსები";
    link4.textContent="გალერეა";
    login.textContent="შესვლა";
    logout.textContent="გამოსვლა";
    if(loginH1!=null){
        loginH1.textContent="შესვლა";
        nameformR.placeholder="სახელი";
        lastNameFormR.placeholder="გვარი";
        passwordFormR.placeholder="პაროლი";
        usernameformL.placeholder="მეტსახელი";
        usernameformR.placeholder="მეტსახელი";
        passwordFormL.placeholder="პაროლი";
        submitR.textContent="რეგისტრაცია";
        submitL.textContent="შესვლა";
    }
    if(stat1!=null){
        stat1.textContent="400+ მოსწავლე";
        stat2.textContent="5+ კურსი";
        stat3.textContent="2k+ გამომწერი";
        best.textContent="საუკეთესო აკადემია საქართველოში";
        ceo.textContent="აკადემიის უფროსი";
        ceoName.textContent="ნიკა კეშელავა";   
    }
}