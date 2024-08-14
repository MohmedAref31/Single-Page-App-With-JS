export const Profile = (props) => {

const age = (new Date()).getFullYear() - (new Date(props.birthDate)).getFullYear();

  return `
    <div class="profile">
    <h1>Profile</h1>
    <div class = "profile-content">
    <p>Name: <span>${props.name}</span></p>
    <p>Email: <span>${props.email}</span></p>
    <p>Age: <span>${age}</span></p>
    </div>
    </div>
    `;
};
