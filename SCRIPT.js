var start_date = new Date('02/29/2024');
    var next_date_update = addDays(start_date,1);
    var next_date = new Date(next_date_update).toLocaleDateString('en-Us');

    if(next_date!='Invalid Date')
    {
       var final_date = next_date;
       console.log(final_date);
    }

    function addDays ( myDate , days)
    {
       return new Date(myDate.getTime() + days*24*60*60*1000);
    }
const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Enable  dark mode
  // Check and set the correct image for each mode
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.src = 'images/final_icon-removebg-preview.png';
  } else {
    modeToggle.src = 'images/final_icon-removebg-preview.png';
  }
});

// 

window.addEventListener('load', () => {
    // const is a variable that cant be change think of it as final in java 
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
    // list_el is  list elment 
	const list_el = document.querySelector("#tasks");
    form.addEventListener('submit', (e) => {
        //. prevent defulat prevent the page refreshing when adding  task 
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
             

// underline test 
task_el.addEventListener('click', () => {
    task_el.classList.toggle('completed');
});    


        // This is for the eddit buton 

		task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
                // delete button 
                task_delete_el.addEventListener('click', (e) => {
                    list_el.removeChild(task_el);
                });
                document.getElementById('Delete-All-Tasks').addEventListener('click', function() {
             const tasksContainer = document.getElementById('tasks');
             // removes all elments of the list 
            tasksContainer.innerHTML = ''; 
        });

		});
	});
 document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tasks').addEventListener('click', function(event) {
        if (event.target.classList.contains('task')) {
            const audio = document.getElementById('taskCompleteSound');
            if (audio) { 
                audio.play();
            }
        }
    });
});
