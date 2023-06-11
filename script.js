const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
let ul =``;
let draggedItem = null;

 //document.getElementById('list').innerHTML = ul;
for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
			window.alert("drop successfully");
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});
        list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			e.preventDefault()
			console.log('drop');
          this.append(draggedItem);
		 window.alert("drop successfully")
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
       
	}
    function resetButtoon(){
       window.location.reload()
        const list_items = document.classList.remove('.list-item');
         
    }
}
