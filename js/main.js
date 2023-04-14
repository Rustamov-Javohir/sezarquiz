const elFormSelect = document.querySelector(".js-form-select");
const elInputArea = document.querySelector(".js-input-area");
const elResultArea = document.querySelector(".js-result-area");
const elBtnCopy = document.querySelector(".js-btn-copy");

let sezarNumber = 1;
elFormSelect.addEventListener("change", () => {
    sezarNumber = Number(elFormSelect.value);
});

elInputArea.addEventListener("keyup", () => {
    const inputArea = elInputArea.value.trim();
    let resultArea = "";

    for (let i = 0; i < inputArea.length; i++) {
        let asciiNum = inputArea.charCodeAt(i);
        if (asciiNum >= 65 && asciiNum <= 90) {
            asciiNum -= 65;
            asciiNum = (asciiNum + sezarNumber) % 26;
            asciiNum += 65;
        }
        if (asciiNum >= 97 && asciiNum <= 122) {
            asciiNum -= 97;
            asciiNum = (asciiNum + sezarNumber) % 26;
            asciiNum += 97;
        }
        resultArea += String.fromCharCode(asciiNum);
    }

    elResultArea.innerHTML = resultArea;
})

async function copyClipboard() {
    try {
        let copyText = elResultArea;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    } catch (error) {
        console.log(error);
    }
}

elBtnCopy.addEventListener("click", () => {
    copyClipboard();
})

const elSezarText = document.querySelector(".js-sezar-text");
const elDeSezarText = document.querySelector(".js-desezar-text");
const elDeCodeBtn = document.querySelector(".js-decode-btn");

elDeCodeBtn.addEventListener("click", () => {
    const sezarText = elSezarText.value.trim();

    let resultArea = "";
    for (let i = 0; i < sezarText.length; i++) {
        let sezarLetter = sezarText.charCodeAt(i);
        if ( sezarLetter >= 65 && sezarLetter <= 90) {
            sezarLetter -= 65;
            sezarLetter = (sezarLetter - sezarNumber) % 26;
            sezarLetter += 65;
        }
        if (sezarLetter >= 97 && sezarLetter <= 122) {
            sezarLetter -= 97;
            sezarLetter = (sezarLetter - sezarNumber) % 26;
            sezarLetter += 97;
        }
        resultArea += String.fromCharCode(sezarLetter);
        
    }

    elDeSezarText.textContent = resultArea;
    console.log(resultArea);
})