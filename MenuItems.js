//Please keep descriptions around 200 character or less

export const menuData = {
	drinks: [
		{
			name: 'Black Coffee',
			index: 'd1',
			price: '$4',
			description:
				'Black coffee is coffee that has been brewed using only water and ground coffee with nothing else added to it.'
		},
		{
			name: 'Cappuccino',
			index: 'd2',
			price: '$5',
			description:
				'Coffee made with milk that has been frothed up with pressurized steam.'
		},
		{
			name: 'Local Cold Brew',
			index: 'd3',
			price: '$8',
			description:
				'Cold brew coffee made locally guaranteed to send you flying. Courtesy of our friends over at Uel Zing'
		},
		{
			name: 'Iced Tea',
			index: 'd4',
			price: '$7',
			description:
				'Strawberry peach tea severed over ice. It may be sweetened with simple syrup and/or apple slices.'
		}
	],
	food: [
		{
			name: 'Chocolate Chip Scone',
			index: 'f1',
			price: '$6',
			description:
				'These melt-in-your-mouth chocolate chip scones are tender and moist with deliciously crumbly edges'
		},
		{
			name: 'Blueberry Muffin',
			index: 'f2',
			price: '$6',
			description:
				'These large muffins are jam-packed with blueberries with a sugary-cinnamon crumb topping.'
		},
		{
			name: 'Strawberry cheesecake',
			index: 'f3',
			price: '$9',
			description:
				'Paired with a buttery graham cracker crust and topped with strawberries, this classic cheesecake is creamy, silky, and smooth.'
		}
	],
	hookah: [
		{
			name: 'Tokyo Spice',
			index: 'h1',
			price: '$8',
			tinPrice: '$25',
			description:
				'This flavor combines sweet citrus with light notes of spices. The orange and lime blend has quickly made this shisha flavor an office favorite.'
		},
		{
			name: 'White Mist',
			index: 'h2',
			price: '$8',
			tinPrice: '$25',
			description:
				'White Mist Starbuzz shisha tobacco is a deliciously creamy flavor, with incredible notes of peach and spice mixed in for a wonderful smoke session.'
		},
		{
			name: 'Dark Vanilla',
			index: 'h3',
			price: '$8',
			tinPrice: '$25',
			description:
				'Dark Vanilla is a powerful, robust blend of vanilla shisha with lasting effects. Great as a mixer, this Dark Vanilla pairs with others, but can also smoke well on its own.'
		},
		{
			name: 'Peach',
			index: 'h4',
			price: '$8',
			tinPrice: '$25',
			description:
				'This rich peach, complemented by heavy spice notes, makes for an incredible smoke experience.'
		},
		{
			name: 'Honey Dew',
			index: 'h5',
			price: '$8',
			tinPrice: '$25',
			description:
				'A smooth, honey dew melon flavor that is sure to please. The flavor translates well into a nice, refreshing melon flavor, perfect for a summer smoke.'
		},
		{
			name: 'Ginkco',
			index: 'h6',
			price: '$8',
			tinPrice: '$25',
			description:
				'Ginkco packs a wallop of flavorful intricacies and tones. Catch notes of honey, ginger and a light sprinkle of mint. This is a great afternoon bowl on a hot summer day.'
		},
		{
			name: 'Alaskan Freeze',
			index: 'h7',
			price: '$10',
			tinPrice: '$30',
			description:
				'A nice cooling mint with strong tobacco undertones that are common in dark leaf tobacco blends.'
		},
		{
			name: 'Fresh Lime',
			index: 'h8',
			price: '$8',
			tinPrice: '$25',
			description:
				'A deliciously tangy and sour plain lime flavor. The flavor translates well from the taste, not featuring as much of the strong tobacco notes as others in the Vintage line.'
		}
	]
};

export const popularData = [
	menuData.hookah[1],
	menuData.food[0],
	menuData.drinks[2]
];
