let userRows = [
	{
		id: 1,
		username: 'Qadir Yolme',
		avatar: 'images/qadir.jpg',
		status: 'active',
		transaction: '$129.52',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 2,
		username: 'Amin Saeedi',
		avatar: 'images/amin.jpg',
		status: 'non-active',
		transaction: '$110',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 3,
		username: 'Sasan Moq',
		avatar: 'images/sasan.jpg',
		status: 'active',
		transaction: '$98',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 4,
		username: 'Zahra Agayi',
		avatar: 'images/zahra.jpg',
		status: 'active',
		transaction: '$0',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 5,
		username: 'Hamze mohammadi',
		avatar: 'images/hamze.jpg',
		status: 'active',
		transaction: '$55.98',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 6,
		username: 'Phorez Babaee',
		avatar: 'images/Default Avatars/1.jpg',
		status: 'active',
		transaction: '$129.52',
		email: 'dev.phorez@gmail.com',
		aboutMe: 'Lorem ipsum my dolor is sit and amet, about consectetur yes adipisicing bro elit. Alias is consequatur and eius eveniet magni me omnis to quibusdam quisquam?',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 7,
		username: 'Judi Mirmirani',
		avatar: 'images/Default Avatars/5.jpg',
		status: 'non-active',
		transaction: '$110',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 8,
		username: 'motad bangi',
		avatar: 'images/Default Avatars/3.jpg',
		status: 'active',
		transaction: '$98',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 9,
		username: 'Sorosh Hichckas',
		avatar: 'images/Default Avatars/4.jpg',
		status: 'active',
		transaction: '$0',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	},
	{
		id: 10,
		username: 'Hosain Tohi',
		avatar: 'images/Default Avatars/2.jpg',
		status: 'active',
		transaction: '$55.98',
		email: 'amin@gmail.com',
		phid: function () {
			return `ph-${this.id}/${this.username[0].toUpperCase()}`
		}
	}
]

const defaultAvatars = [
	{ id: 1, src: '1.jpg' },
	{ id: 2, src: '2.jpg' },
	{ id: 3, src: '3.jpg' },
	{ id: 4, src: '4.jpg' },
	{ id: 5, src: '5.jpg' },
]

export { userRows, defaultAvatars }