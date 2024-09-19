import "./styles.css";

export default function App() {
  return (
    <div class="container">
      <h1 class="form-heading">Add User</h1>
      <form id="myForm">
        <div class="mb-3">
          <label for="name">Title</label>
          <input type="text" class="form-control" id="name" />
          <p id="nameErrMsg" class="error-message"></p>
        </div>
        <div class="mb-3">
          <label for="text">Description</label>
          <input type="text" class="form-control" id="email" />
          <p id="emailErrMsg" class="error-message"></p>
        </div>

        <div class="mb-3">
          <label for="status">Due Date</label>
          <input type="date" />
        </div>

        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
