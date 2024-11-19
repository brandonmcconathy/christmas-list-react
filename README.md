# Christmas List

*Built using React.js, Next.js, Firebase, Typescript, and Tailwind CSS.*

[Live Website](https://family-christmas-list.vercel.app/)

### Front End
- Dynamic list of users each with their own list of items, links, and descriptions.
- Sign in page where user types username to gain access to their items.
- Manage page where users can add new items or edit existing items.

### Back End
- Users submit item names, links, and descriptions which are then stored in Firebase.
- Firebase data is read upon page load to display all users lists.
- Each username has its own document in Firebase which contains all of their items.
