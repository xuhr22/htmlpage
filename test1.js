var count = 0;
function abc() {

}
let a = 10;
const b = 20;

function xyz() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            count++;
            document.getElementById("a1").innerText = `You clicked ${count} times`;
            resolve("success");
        }, 1000);
    }).then((x) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById("a1").innerText = `You clicked ${x} times`;
                resolve("success");
            }, 1000);
        }
        );
    }
    );
}