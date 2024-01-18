function chlang(){
    link1.textContent="მთავარი";
    link2.textContent="ჩვენს შესახებ";
    link3.textContent="კურსები";
    link4.textContent="გალერეა";
    login.textContent="შესვლა";
    logout.textContent="გამოსვლა";
    if(loginH1!=null){
        loginH1.textContent="შესვლა";
        registerH1.textContent="რეგისტრაცია";
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
        ceoAbout.textContent="ნიკა კეშელავა აკადემიის უფროსია. მისი მისიაა დაეხმაროს ხალხს ფიზიკურად და ფსიქოლოგიურად განვითარებაში."
    }
    if(aboutTxt1!=null){
        aboutTxt1.textContent="ჩვენს შესახებ";
        aboutTxt2.textContent="ჩვენი აკადემია  არის მეგობრული და სანდო. გიდგებათ პერსონალურად, ადამიანურად და ბოლომდე გეხმარებით განვითარებაში. ჩვენი მისიაა დავეხმაროთ ყველა ასაკის ხალხს პროგრამირების სწავლაში. ჩვენი გაკვეთილები ტარდება discord სერვერზე. ყოველ კვირა ჩვენ გვაქვს გაკვეთილები. როცა შემოხვლა ირჩევ რაზმს. თუ შეკითხვები გიჩნდება რაზმის ლიდერი გეხმარება.";
        aboutTxt3.textContent="წოდებები";
        aboutTxt4.textContent="1) CEO. CEO არის აკადემიის უფროსი.";
        aboutTxt5.textContent="2) Mentor. Mentor-ი ასწავლის მოსწავლეებს.";
        aboutTxt6.textContent="3) Moderator. Moderator-ი ასრულებს CEO-ს დავალებას. Moderator-ი CEO-ს აკადემიის მართვაში ეხმარება.";
        aboutTxt7.textContent="4) Leader. Leader-ი ასრულებს CEO-ს და Mentor-ის დავალებებს. ლიდერებს ყავთ რაზმი, რომის მოსწავლეების დახმარებაც ევალებათ";
        aboutTxt8.textContent="5) Mini leader. Mini leader-ი ეხმარება ლიდერს საქმის შესრულებაში";
        aboutTxt9.textContent="სხვა წოდებები";
        aboutTxt10.textContent="• Mini mentor. Mini mentor-ი ატარებს ინდივიდუალურ გაკვეთილებს.";
        aboutTxt11.textContent="• Github checker. Github Checker-ი ამოწმენს ხალხის დავალებებს გითაბზე.";
    }
    if(course1!=null){
        course1.textContent="პროგრამირება";
        course2.textContent="გრაფიკული დიზაინი";
        course3.textContent="ინგლისური";
        course4.textContent="მათემატიკა";
        course5.textContent="გეიმ დეველოპმენტი";
        course6.textContent="ციფრული მეცნიერება";
    }
}
function getwidth(){
    if(self.innerWidth){
        return self.innerWidth;
    }
    else{
        return screen.width;
    }
}
function frame(){
    let username=localStorage.getItem("Name");
    if(username!=null){
        if(getwidth()<1260){
            if(getwidth()<420){
                username=username[0]+"...";
            }
            else if(username.length>7 && getwidth()<1150){
                username=username[0]+username[1]+username[2]+username[3]+username[4]+"...";
            }
            else if(username.length>10){
                username=username[0]+username[1]+username[2]+username[3]+username[4]+username[5]+username[6]+username[7]+"...";
            }
        }
        Name.textContent=username;
    }
}
setInterval(frame,50);