// Sample member data
let members = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "555-0101",
        address: "123 Main St, Anytown",
        type: "regular",
        booksOut: 2,
        joinDate: "2025-01-15"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "555-0102",
        address: "456 Oak Ave, Somewhere",
        type: "premium",
        booksOut: 0,
        joinDate: "2025-02-20"
    },
    {
        id: 3,
        name: "Robert Johnson",
        email: "robert@example.com",
        phone: "555-0103",
        address: "789 Pine Rd, Nowhere",
        type: "student",
        booksOut: 1,
        joinDate: "2025-03-10"
    }
];

// DOM Elements
const membersTable = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
const memberSearch = document.getElementById('memberSearch');
const memberSearchBtn = document.getElementById('memberSearchBtn');
const addMemberBtn = document.getElementById('addMemberBtn');
const addMemberModal = document.getElementById('addMemberModal');
const addMemberForm = document.getElementById('addMemberForm');
const closeModal = document.querySelector('.close-modal');

// Display members
function renderMembers(membersList = members) {
    membersTable.innerHTML = '';
    
    if (membersList.length === 0) {
        membersTable.innerHTML = '<tr><td colspan="7" class="no-members">No members found</td></tr>';
        return;
    }
    
    membersList.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td><span class="member-type ${member.type}">${member.type}</span></td>
            <td>${member.booksOut}</td>
            <td class="actions">
                <button class="btn-icon edit-member" data-id="${member.id}"><i class="fas fa-edit"></i></button>
                <button class="btn-icon delete-member" data-id="${member.id}