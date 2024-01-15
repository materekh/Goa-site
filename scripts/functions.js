function chlang(){
    link1.textContent="მთავარი";
    link2.textContent="ჩვენს შესახებ";
    link3.textContent="კურსები";
    link4.textContent="გალერეა";
    login.textContent="შესვლა";
    logout.textContent="გამოსვლა";
    if(loginH1!=null){
        loginH1.textContent="შესვლა";
        nameForm.placeholder="სახელი";
        lastNameForm.placeholder="გვარი";
        passwordForm.placeholder="პაროლი";
    }
    if(stat1!=null){
        stat1.textContent="400+ მოსწავლე";
        stat2.textContent="10+ კურსი";
        stat3.textContent="2k+ გამომწერი";
        best.textContent="საუკეთესო აკადემია საქართველოში";
        ceo.textContent="აკადემიის უფროსი";
        ceoName.textContent="ნიკა კეშელავა";
    }
}