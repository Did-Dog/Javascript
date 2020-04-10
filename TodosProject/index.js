const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');
const generate=todo=>{
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
    list.innerHTML+=html;
}
addForm.addEventListener('submit',e=>
{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length)
    {
        generate(todo);
        addForm.reset();
    }
});
//delete
list.addEventListener('click',e=>
{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});
//a function for checking term
const filterTodos=(term)=>
{
    //console.log(term);
    //console.log(list.children);//we cannot use html collection directly
    //console.log(Array.from(list.children));
    Array.from(list.children)
        .filter((todo)=>!todo.textContent.toLowerCase().includes(term))//compare the term against the text content in li tag
        .forEach((todo)=>todo.classList.add('filtered'));
    Array.from(list.children)
        .filter((todo)=>todo.textContent.toLowerCase().includes(term))//contain the term
        .forEach((todo)=>todo.classList.remove('filtered'));
};
//keyup event
search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();//trim will help to check string
    filterTodos(term);
});
