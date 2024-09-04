alert(`Pricing rules:\n
    Children (Ages 0-5): Free entry\n
    Kids (Ages 6-12): 50 PHP\n
    Teenagers (Ages 13-17): 100 PHP\n
    Adults (Ages 18-59): 200 PHP\n
    Senior Citizens (Ages 60 and above): 150 PHP`);

let age = parseInt(prompt("Please enter your age: "));

if (age !== null) {
    let priceCategory;

    if (age >=0 && age <= 5) {
        priceCategory = "child";
    } else if (age >= 6 && age <= 12) {
        priceCategory = "kid";
    } else if (age >= 13 && age <= 17) {
        priceCategory = "teenager";
    } else if (age >= 18 && age <= 59) {
        priceCategory = "adult";
    } else if (age >= 60) {
        priceCategory = "senior";
    }

    let price;
    switch (priceCategory) {
        case "child":
            price = "Free entry";
            break;
        case "kid":
            price = "50 PHP";
            break;
        case "teenager":
            price = "100 PHP";
            break;
        case "adult":
            price = "200 PHP";
            break;
        case "senior":
            price = "150 PHP";
            break;
        default:
            price = "Invalid age";
    }

    alert(`The entry fee is: ${price}`);
} else {
    alert("No age entered");
}