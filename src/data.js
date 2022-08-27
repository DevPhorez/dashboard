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

const products = [
	{
		id: 1,
		title: 'MIS Monitor',
		brand: 'MIS',
		price: 233,
		colors: [
			{ id: 1, name: 'pink', backgroundColor: '#d099c5', isChecked: true },
			{ id: 2, name: 'black', backgroundColor: '#000', isChecked: false },
			{ id: 3, name: 'blue', backgroundColor: '#0000ff', isChecked: false },
		],
		sizes: ['SM'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
		image: 'Images/Products/MIS Monitor.jpg',
		features: [
			{ id: 1, title: 'Panel type', value: 'IPS' },
			{ id: 2, title: 'Backlight', value: 'LED' },
			{ id: 3, title: 'Monitor type', value: 'Programming' },
		],
		comments: [
			{
				id: 1,
				rate: 3,
				owner: 'Phorez',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipis',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 2,
				rate: 5,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 3,
				rate: 1,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 4,
				rate: 2,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 5,
				rate: 4,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
		],
	},
	{
		id: 2,
		title: 'Samsung Monitor',
		brand: 'Samsung',
		price: 233,
		colors: [
			{ id: 1, name: 'pink', backgroundColor: '#d099c5', isChecked: true },
			{ id: 2, name: 'black', backgroundColor: '#000', isChecked: false },
			{ id: 3, name: 'blue', backgroundColor: '#0000ff', isChecked: false },
		],
		sizes: ['SM', 'LG'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
		image: 'Images/Products/Samsung Monitor.jpg',
		features: [
			{ id: 1, title: 'Panel type', value: 'SPA' },
			{ id: 2, title: 'Backlight', value: 'LCD' },
			{ id: 3, title: 'Monitor type', value: 'Photography' },
		],
		comments: [
			{
				id: 1,
				rate: 3,
				owner: 'Phorez',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipis',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 2,
				rate: 5,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 3,
				rate: 1,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 4,
				rate: 2,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 5,
				rate: 4,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
		],
	},
	{
		id: 3,
		title: 'Xiaomi Monitor',
		brand: 'Xiaomi',
		price: 233,
		colors: [
			{ id: 1, name: 'pink', backgroundColor: '#d099c5', isChecked: true },
			{ id: 2, name: 'black', backgroundColor: '#000', isChecked: false },
		],
		sizes: ['SM', 'LG', 'XL'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
		image: 'Images/Products/Xiaomi Monitor.jpeg',
		features: [
			{ id: 1, title: 'Panel type', value: 'IPS' },
			{ id: 2, title: 'Backlight', value: 'LED' },
			{ id: 3, title: 'Monitor type', value: 'Light' },
		],
		comments: [
			{
				id: 1,
				rate: 3,
				owner: 'Phorez',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipis',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 2,
				rate: 5,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 3,
				rate: 1,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 4,
				rate: 2,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
			{
				id: 5,
				rate: 4,
				owner: 'Phorez B',
				title: 'Good',
				positivePoints: [],
				negativePoints: [],
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
				isAnonymous: false,
				date: '2022 / 10 / 8',
			},
		],
	},
]

export { userRows, defaultAvatars, products }