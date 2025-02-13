# Christmas List

*Built using React.js, Next.js, Firebase, Typescript, and Tailwind CSS.*

[Live Website](https://family-christmas-list.vercel.app/)

## How to Use
- Enter your name and select the family then press continue.
- You are then able to view all of the other lists within that family except your own.
- You are able to mark other people's items as bought and click on their provided links.
- To view your own items, click on "Modify your list".
- To add new items, fill in the item name and optionally a description and link then press "ADD ITEM".
- To delete current items, press the delete button on the item you want to delete.
- To get back to the main list press the "GO BACK" button.

## How it Works
### Front End
- Dynamic list of users each with their own list of items, links, and descriptions.
- Users are able to mark items as bought.
- Sign in page where users type username and selects their family to gain access to their items.
- Manage page where users can add new items or edit existing items on their list.

### Back End
- Users submit item names, links, and descriptions which are then stored in Firebase.
- Firebase data is fetched upon page load to display all users lists.
- Each username has its own document within the family collection in Firebase which contains all of their items.
