const addBtn = document.querySelector('.add')

addBtn.addEventListener('click', (e) => {
  addNewNote()
})

function addNewNote() {
  const note = document.createElement('div')
  note.classList.add = 'notes'

  note.innerHTML = `
    <div class="notes">
      <div class="tools">
        <div class="title">Редактирование...</div>
        <div>        
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      <div></div>
      <div class="main hidden"></div>
      <textarea></textarea>
    </div>
  `

  const notesEl = note.querySelector('.notes')
  const title = note.querySelector('.title')
  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')
  
  
  editBtn.addEventListener('click', (e) => {
  
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  
    title.innerText === 'Редактирование...' ? title.innerText = '' : title.innerText = 'Редактирование...'
  
  })
  
  textArea.addEventListener('input',  (e) => {
    main.innerText = e.target.value
  })
  
  deleteBtn.addEventListener('click', () => {
    notesEl.remove()
  })

  document.body.appendChild(note)
}