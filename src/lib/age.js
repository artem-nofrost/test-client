export function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    let lastNum = age.toString().split('').pop();

    return lastNum === 2 || lastNum === 3 || lastNum === 4
        ? age + ' года'
        : age + ' лет';
}
