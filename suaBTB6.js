//Bai 1
function timSoLonNhat (num1, num2, num3) {
if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number')
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    }else {
        return num3;
    }
}
console.log (timSoLonNhat (10, 100 ,150))

// //Bai 2
// const kiemTraSoCchan = (a) => {
//     if 
//     // Lam tiep
// }

//Bai 3
const giaBao = 'Bao'
const mang1 = ['Ky', 'Tam', 'Tran', 'GiaBao', 10]
mang1.splice (1, 1, 'Manh','Hoang Anh')
console.log (mang1)

//Bai 4
