const getPost = async () => {
    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=4`
        )
        return res.data
    } catch (error) {
        console.error("xatolik bor");
    }
};
const post = getPost()
post.then((data) => {
    console.log(data);

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.map((v) => {
        const div = document.createElement("ul");
        div.className = " p-0 shadow";
        div.innerHTML = `   <li status="inactive" id="task1"
                    class="list-group-item d-flex justify-content-between align-items-center">
                    ${v.id} ${v.title}
                    <div>
                        ${v.completed && '<i class="fas fa-check-circle text-success"></i>' || ""} 
                        <button
                            class="btn btn-primary mr-2">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </li> `;
        list.appendChild(div);
    });
});

// post


const sendPost = () => {
    const inputId = document.getElementById("inputid").value;
    axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        title: inputId,
        completed: false,
        userId: 1,
    })
        .then((res) => {
            console.log(res);
            alert("muvafaqiyatli  ulandi");

        });
};