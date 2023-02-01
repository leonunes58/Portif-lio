const section = document.querySelector('.container')
const form = document.querySelector('.box-text');
const enviar = document.querySelector('.botão');


function createTag() {
    const containerLista = document.createElement('div');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.innerHTML = form.value;
    button.innerHTML = 'Apagar';
    

    button.addEventListener('click', function() {
        ul.removeChild(li);
    })

    addTag(containerLista, ul, li, button);
}

function addTag(containerTag, ulTag, liTag, buttonTag) {
    section.appendChild(containerTag);
    containerTag.appendChild(ulTag);
    ulTag.appendChild(liTag);
    liTag.appendChild(buttonTag);
    addClassList(buttonTag, containerTag);
}

function addClassList(buttonTag, containerTag) {
    containerTag.classList.add('style')
    buttonTag.classList.add('apagar')

}

enviar.addEventListener('click', function() {
    if(form.value){
        createTag();
    }
})