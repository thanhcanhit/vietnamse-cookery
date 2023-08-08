import { Food } from "../../types/interface";

const foods: Food[] = [
	{
		id: 1,
		name: { vi: "Bún Bò Huế", en: "Hue Beef Noodle Soup" },
		introduction: {
			vi: `Bún bò Huế không những là đặc sản của xứ Huế mộng mơ mà còn của nền ẩm thực Việt Nam. Sự kết hợp tuyệt vời giữa nước dùng đậm đà hoà cùng chút cay nồng của sa tế và mùi vị đặc biệt của mắm ruốc tạo nên hương vị ngon khó cưỡng cho thực khách ngay lần đầu thưởng thức.
    Tuy nguyên liệu để nấu bún bò chuẩn vị khá nhiều nhưng cách chế biến lại không hề cầu kỳ, phức tạp. Bạn chỉ cần tỉ mỉ lựa chọn những nguyên liệu tươi ngon và đầy đủ gia vị cần thiết là đã có thể bắt tay vào thực hiện ngay món ăn này rồi.`,
			en: `Hue beef noodle soup is not only a specialty of the dreamy Hue country but also of Vietnamese cuisine. The wonderful combination of rich broth mixed with the pungent taste of satay and the special taste of fish sauce creates an irresistible taste for diners at first taste.
			Although the ingredients to cook beef noodle soup are quite a lot, the processing method is not fussy or complicated. You just need to carefully choose the fresh ingredients and add the necessary spices to be able to start making this dish right away.
			`,
		},
		imgPath: [
			"/vietnamse-cookery/img/foods/1/1.png",
			"/vietnamse-cookery/img/foods/1/2.jpg",
			"/vietnamse-cookery/img/foods/1/3.jpg",
		],
		ingredient: {
			vi: [
				"Bắp bò: 600 gr",
				"Nạm bò: 600 gr",
				"Gân bò: 400 gr",
				"Giò heo (chọn giò trước): 1 cái khoảng 800 gr",
				"Xương ống: 1 kg",
				"Mắm ruốc Huế: khoảng 3 muỗng canh",
				"Sả: 6 cây",
				"Gừng: 50 gr",
				"Hành tím, tỏi",
				"Bún tươi cọng to",
				"Rau sống (bắp chuối, giá sống, rau thơm, rau răm, hành lá, củ hành tây)",
				"Chả Huế (tùy thích)",
				"Ớt, sa tế, tiêu, muối, nước mắm, dầu ăn, dấm trắng",
				"Huyết heo (nếu không thích ăn huyết bạn có thể bỏ qua)",
			],
			en: [
				"Beef: 600 gr",
				"Beef Stew: 600 gr",
				"Beef tendon: 400 gr",
				"Pork sausage (choose first): 1 piece, about 800 gr",
				"Tubular bone: 1 kg",
				"Hue fish sauce: about 3 tablespoons",
				"Lemongrass: 6 plants",
				"Ginger: 50 gr",
				"Purple onion, garlic",
				"Fresh vermicelli with big stalks",
				"Raw vegetables (banana, raw sprouts, herbs, laksa leaves, green onions, and onions)",
				"Cha Hue (optional)",
				"Chili, satay, pepper, salt, fish sauce, cooking oil, and white vinegar",
				"Pig blood (if you don't like blood, you can skip it).",
			],
		},
		steps: [
			{
				name: {
					vi: "Sơ chế nguyên liệu",
					en: "Process materials",
				},
				content: {
					vi: `Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.
				Giò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.
				Các loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.
				Ớt tươi: cắt nhỏ, cho vào nước mắm.
				Hành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.
				Huyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.
				Pha phần mắm ruốc Huế với ½ chén nước, khuấy đều.`,
					en: `Meat and beef bones should be washed with salt water and vinegar, then rinsed thoroughly under water to completely eliminate the smell of beef. Drain. The beef part, you roll up and then use the thread to tie.
					Pork sausage: shave, wash, put in a pot of water, simmer until the pork skin is clear, turn off the stove, and take out. You can add a little salt to cook with.
					Vegetables: remove damaged parts, wash, and dry.
					Fresh chili: chopped, put in fish sauce.
					Green onion: cut off the white onion head; small fiber Thin white onion. The laksa leaves cover just about 2/3 of the little finger. Lemongrass and ginger are smashed and washed.
					Blood: boil a pot of water and boil the blood with a little salt and sugar. When the blood clots, you can stab it with a chopstick without seeing pink water come out. Remove, soak in cold water, and then cut into bite-sized pieces.
					Mix Hue fish sauce with 1/2 cup of water and stir well.`,
				},
			},
			{
				name: {
					vi: "Cách nấu bún bò Huế",
					en: "How to Cook Bun Bo Hue",
				},
				content: {
					vi: `Bước 1: Bạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.
					Bước 2: Bắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nắp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.
					Bước 3: Với phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.
					Lưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.
					Bước 4: Cho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. 
					Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.
					Nếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.`,
					en: `Step 1: You marinate all the meat according to the following recipe: 2 tablespoons sugar, 1 tablespoon salt, 1 tablespoon MSG, 1 tablespoon mixed fish sauce, 2 tablespoons minced purple onion, 2 tablespoons minced garlic, and 2 tablespoons minced lemongrass
					Step 2: Put the pot on the stove, put 3 lemongrass and 1/2 ginger sticks in the bottom of the pot first, then add the bones and pork leg, pour in the amount of water that has just covered the surface of the meat, cover, and bring to a boil. When the pot is boiling, lower the heat to simmer for a few more minutes, then turn off the heat. Take out the pork leg and soak it in cold water to firm up the meat.
					Step 3: With the beef part, encrusted with beef and beef tendon, you also stew the same way as pork bone and pork leg with the remaining amount of lemongrass and ginger.
					Note: Because beef and pork have different toughnesses, they must be stewed separately.
					Step 4: Put the two types of stew in a large pot and add enough water to make about 5 liters of water. Bring to a boil, then season with the following proportions: 3 tablespoons fish sauce, 2 tablespoons salt soup, 2 tablespoons sugar, 2 teaspoons monosodium glutamate, and diluted Hue fish sauce
					Finally, you add pig's blood and roll it into the pot of water. Wait for it to boil, and you have the broth for your beef noodle soup.
					If you want your broth to have a nicer color, you can do the following extra steps: Put 1.5 tablespoons of minced lemongrass and 1 tablespoon of minced garlic in a pan of hot oil, fry until fragrant, and then add 2-3 tablespoons of color. thing, stir quickly, then turn off the stove. Add this to the pot of cooking broth.`,
				},
			},
			{
				name: { vi: "Trình bày món ăn", en: "Food presentation" },
				content: {
					vi: "Trụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…",
					en: `Pour the vermicelli through boiling water and then put it in a bowl. Arrange the meat, tendons, and spring rolls, sprinkle some cilantro, and add the broth. Served with split morning glory, grated banana, bean sprouts, herbs, chili lime, satay...				`,
				},
			},
		],
		touristAttractions: [1, 2],
	},
	{
		id: 2,
		name: { vi: "Bún chả Hà Nội", en: "Ha Noi Kebab Rice Noodles" },
		introduction: {
			vi: `Bún chả là một món ăn của Việt Nam, bao gồm bún, chả thịt lợn nướng trên than hoa và bát nước mắm chua cay mặn ngọt. Món ăn xuất xứ từ miền Bắc Việt Nam, là thứ quà có sức sống lâu bền nhất của Hà Nội, nên có thể coi đây là một trong những đặc sản đặc trưng của ẩm thực Hà thành. Bún chả có nét tương tự món bún thịt nướng ở miền Trung và miền Nam, nhưng nước mắm pha có vị thanh nhẹ hơn.`,
			en: `Bun cha is a Vietnamese dish consisting of vermicelli, grilled pork rolls over charcoal, and a bowl of sweet and sour fish sauce. The dish originates from the North of Vietnam and is the most durable gift of Hanoi, so it can be considered one of the typical specialties of Hanoi cuisine. Bun cha is similar to grilled meat vermicelli in the Central and Southern regions, but the mixed fish sauce has a lighter taste.`,
		},
		imgPath: [
			"/vietnamse-cookery/img/foods/2/1.jpg",
			"/vietnamse-cookery/img/foods/2/2.png",
			"/vietnamse-cookery/img/foods/2/3.jpg",
		],
		ingredient: {
			vi: [
				"1 kg Bún tươi",
				"Rau thơm xà lách, húng Láng, húng bạc hà,...",
				"Chả:",
				"500 g thịt ba rọi rút sườn",
				"500 g thịt nạc dăm heo",
				"2 thìa cà phê dầu ăn",
				"2 thìa canh mật ong (hoặc 1 thìa canh đường)",
				"4 thìa canh nước hàng",
				"4 thìa canh nước mắm",
				"3 thìa canh dầu hào",
				"2 thìa cà phê tiêu",
				"40 g tỏi băm",
				"40 g hành tím băm",
				"Dưa góp:",
				"100 g su hào",
				"100 g cà rốt",
				"2 thìa canh đường",
				"1 thìa canh giấm",
				"Nước chấm:",
				"2 thìa canh đường",
				"2 thìa canh mắm",
				"2 thìa canh giấm",
				"200 ml nước",
				"Tỏi, ớt băm",
				"Dụng Cụ:",
				"Que tre chẻ hoặc vỉ nướng",
				"Bếp than hoa hoặc lò nướng",
			],
			en: [
				"1 kg of fresh vermicelli",
				"Lettuce herbs, Lang basil, mint basil,...",
				"Cha:",
				"500g pork belly with ribs",
				"500g lean pork mince",
				"2 teaspoons of cooking oil",
				"2 tablespoons honey (or 1 tablespoon sugar)",
				"4 tablespoons of stock",
				"4 tablespoons of fish sauce",
				"3 tablespoons of oyster sauce",
				"2 teaspoons of pepper",
				"40g minced garlic",
				"40 g minced purple onion",
				"Pickles:",
				"100 g of kohlrabi",
				"100 g of carrots",
				"2 tablespoons of sugar",
				"1 tablespoon of vinegar",
				"Dipping sauce:",
				"2 tablespoons of sugar",
				"2 tablespoons of fish sauce",
				"2 tablespoons of vinegar",
				"200 ml of water",
				"Garlic, minced chili",
				"Tool:",
				"Split bamboo sticks or grill",
				"Charcoal stove or oven",
			],
		},
		steps: [
			{
				name: {
					vi: "Hướng dẫn",
					en: "Instruct",
				},
				content: {
					vi: `Bước 1: Ướp chả
					Thịt ba rọi rửa qua với nước muối loãng cho thêm gừng để làm sạch và khử mùi tanh rồi thái lát vừa ăn.
					Thịt nạc rửa sạch rồi băm nhỏ.
					Chia đôi phần gia vị đã chuẩn bị và ướp vào 2 phần thịt. Ướp khoảng 2-3 tiếng.
					Bước 2: Nướng chả
					Sau khi thịt thấm gia vị, phần thịtnạc nặn thành miếng dẹp vừa ăn, thịt ba rọi thì kẹp xếp vào que tre  rồi mang đi nướng chín đều 2 mặt.
					Bước 3: Làm dưa góp và pha nước mắm
					Cà rốt, su hào rửa sạch, bào vỏ và thái mỏng cho vào bát. Cho đường và giấm vào trộn đều, ướp cùng khoảng 15-20 phút.
					Bắc chảo nhỏ lên bếp, cho lần lượt đường, nước mắm, giấm và nước vào khuấy đều. Để nhỏ lửa, khuấy nhẹ tay đến khi đường tan thì tắt bếp.
					Bước 4: Hoàn thành
					Bày rau thơm, bún, dưa góp cùng chả và thịt nướng lên mẹt rồi thưởng thức.
					`,
					en: `Step 1: Marinate the sausages.
					Bacon was washed with dilute salt water to add ginger to clean and deodorize fish, then sliced to taste.
					Clean the lean meat and cut it into small pieces.
					Divide the prepared seasoning and marinade into two parts of the meat. Marinate for about 2–3 hours.
					Step 2: Bake the sausage.
					After the meat is spiced, the lean meat is molded into flat pieces to eat, and the bacon is clamped on a bamboo stick and then grilled evenly on both sides.
					Step 3: Make pickles and make fish sauce.
					Carrots and kohlrabi were washed, peeled, and sliced into a bowl. Add sugar and vinegar, mix well, and marinate for about 15–20 minutes.
					Put a small pan on the stove, add sugar, fish sauce, vinegar, and water, and stir well. To reduce the heat, gently stir until the sugar dissolves, then turn off the heat.
					Step 4: Done
					Arrange herbs, vermicelli, pickled cucumbers, and grilled meat on a plate and enjoy.
					`,
				},
			},
		],
		touristAttractions: [3, 4, 5],
	},
	{
		id: 3,
		name: { vi: "Gỏi cuốn tôm thịt", en: "Spring rolls" },
		introduction: {
			vi: `Gỏi cuốn tôm thịt là món ngon hấp dẫn, có độ dinh dưỡng cao và thích hợp cho những ngày mà bạn cảm thấy ngán cơm, thì đây là sự lựa chọn hoàn hảo. Cùng vào bếp thực hiện ngay món gỏi cuốn thơm ngon này nha.`,
			en: `Shrimp and meat rolls are delicious, highly nutritious, and suitable for days when you feel bored with rice. This is the perfect choice. Let's go to the kitchen to make this delicious salad roll right away.`,
		},
		imgPath: [
			"/vietnamse-cookery/img/foods/3/1.jpg",
			"/vietnamse-cookery/img/foods/3/2.jpg",
			"/vietnamse-cookery/img/foods/3/3.jpg",
		],
		ingredient: {
			vi: [
				"Thịt heo: 300 gr",
				" Tôm: 300 gr",
				" Hẹ: 10 nhánh",
				" Ớt: 2 trái",
				" Tỏi: 1 củ",
				" Bún tươi: 200 gr",
				" Bánh tráng mỏng: 300 gr",
				" Nước cốt chanh: 3 muỗng canh",
				" Rau ăn kèm 1 ít",
				"(Húng lủi/ tía tô/ xà lách)",
				" Nước mắm: 5 muỗng canh",
				" Muối/ đường 1 ít",
			],
			en: [
				"Pork: 300g",
				"Shrimp: 300g",
				"Chives: 10 branches",
				"Chili: 2",
				"Garlic: 1 bulb",
				"Fresh vermicelli: 200 gr",
				"Thin rice paper: 300 gr",
				"Lemon juice: 3 tablespoons",
				"Vegetables served with 1 little",
				"(Basil, Perilla, and Lettuce)",
				"Fish sauce: 5 tablespoons",
				"1 pinch of salt or sugar",
			],
		},
		steps: [
			{
				name: {
					vi: "Cách chọn mua thịt heo tươi ngon",
					en: "How to choose to buy fresh pork",
				},
				content: {
					vi: `Chọn thịt có màu màu hồng nhạt hay đỏ nhạt, phần mỡ sẽ có màu trắng trong hơi ngà ngà. Bên cạnh đó, bạn cũng nên chọn thịt có một ít mỡ hoặc phần mỡ và nạc xen lẫn, để khi ăn không bị ngán do nhiều mỡ hay bị khô do nhiều nạc.
					Thịt heo tươi ngon khi dùng tay ấn thử sẽ thấy độ đàn hồi tốt, sau khi rút tay về thịt trở lại hình dáng ban đầu, trên mặt thịt không tồn tại vết lõm.
					Không nên chọn thịt có màu sắc nhợt nhạt, mùi tanh hôi hoặc thịt bị chảy nhớt vì đây đều là thịt bị ôi thiu hoặc không tươi ngon.
					`,
					en: `Choose meat with a light pink or light red color; the fat will be white with a slight ivory color. In addition, you should also choose meat with a little fat or a mixture of fat and lean, so that when eating, you do not get bored because of a lot of fat or dry due to a lot of lean.
					Fresh pork, when pressed by hand, will have good elasticity; after withdrawing the meat back to its original shape, there will be no indentation on the surface of the meat.
					Do not choose meat that is pale in color, has a bad smell, or is runny, because these are all rancid or not fresh meat.
					`,
				},
			},
			{
				name: {
					vi: "Cách chọn mua tôm tươi ngon",
					en: "How to choose to buy delicious fresh shrimp",
				},
				content: {
					vi: `Bạn nên chọn những con tôm, khi sờ vào không thấy nhớt.
					Ngoài ra, nên chọn những con có lớp vỏ trong suốt, phần đầu và thân dính chặt vào nhau là những con tôm tươi ngon.
					Những con tôm tươi thường sẽ có phần chân và đuôi tôm xếp lại với nhau, còn những con có phần chân và đuôi tôm xòe ra sẽ thường bị tiêm hóa chất, bạn không nên mua chúng nhé!
					`,
					en: `You should choose shrimp that are not greasy to the touch.
					In addition, you should choose the ones with a transparent shell; the head and body stick together and are delicious fresh shrimp.
					Fresh shrimp will usually have the legs and tail folded together, and the ones with the legs and tail spread will often be injected with chemicals; you should not buy them!
					`,
				},
			},
			{
				name: {
					vi: "Cách chế biến Gỏi cuốn tôm thịt",
					en: "How to Cook Shrimp and Meat Salad",
				},
				content: {
					vi: `Bước 1:  Sơ chế thịt heo
					Thịt heo mua về rửa sạch với nước, để khử mùi hôi của thịt, bạn dùng 1 ít muối chà xát xung quanh miếng thịt rồi rửa lại 2 - 3 lần với nước, sau đó vớt ra để ráo.
					
					Tiếp đến, bạn cho thịt vào nồi đổ ngập nước, thêm vào 1 muỗng cà phê muối rồi đặt nồi lên bếp đun với lửa lớn. Khi nước sôi tầm 3 - 5 phút thì tắt bếp.
					
					Để loại bỏ các chất bẩn bám trên bề mặt thịt, cũng như giúp cho thịt sẽ trong hơn, khi vớt thịt ra bạn sẽ rửa thịt lại qua với nước lạnh.
					
					Tiếp đến, bạn bắc nồi lên bếp, cho thịt đã chần lúc nãy vào, đổ nước ngập phần thịt rồi thêm vào 1 muỗng cà phê muối, vặn lửa vừa luộc thịt tầm 30 - 40 phút cho tới khi thịt đã chín mềm, thì tắt bếp vớt thịt ra dĩa, để nguội sau đó cắt thịt thành từng lát mỏng vừa ăn.
					Bước 2: Sơ chế tôm
					Tôm mua về bạn có thể để nguyên con hoặc cắt bỏ đầu tùy ý thích, rửa lại vài lần với nước rồi cho vào nồi.
					Bắc nồi lên bếp thêm 1 ít nước, đậy nắp, mở lửa vừa, nấu cho tôm chuyển sang màu đỏ và chú ý phải đảo đều.
					Sau đó bạn vớt tôm ra để nguội, bóc sạch vỏ, cắt đôi tôm theo chiều dọc theo sống lưng và bỏ chỉ lưng của tôm, rồi xếp tôm ra dĩa.
					Bước 3: Sơ chế các nguyên liệu khác
					Hẹ mua về cắt bỏ gốc, rửa sạch. Rau sống ăn kèm nhặt lá tươi ngon, đem ngâm với nước muối pha loãng khoảng 10 phút sau đó rửa lại vài lần với nước rồi vớt ra rổ để ráo.
					Tỏi bóc sạch vỏ, ớt bỏ cuống, rửa sơ qua với nước rồi băm nhuyễn.
					Bước 4: Cuốn gỏi
					Trải bánh tráng mỏng ra dĩa, thấm sơ 1 ít nước lên bánh tráng cho dễ cuốn, sau đó xếp rau sống, bún tươi, thịt, tôm, hẹ lên rồi cuộn tất cả các nguyên liệu lại cho chắc tay là được.
					Cứ như vậy bạn thực hiện cho đến khi hết phần nguyên liệu nhé.
					Bước 5: Làm nước chấm
					Cho vào chén 2 muỗng canh đường, thêm vào 2 muỗng canh nước lọc khuấy đều cho đường tan hết thì cho vào 3 muỗng canh nước cốt chanh, 5 muỗng canh nước mắm tiếp tục khuấy đều.
					Cuối cùng cho toàn bộ phần tỏi, ớt đã băm nhuyễn vào vậy là đã hoàn thành xong phần nước chấm.
					Bước 6: Thành phẩm
					Bạn bày gỏi cuốn tôm thịt cùng với nước chấm ra và mời mọi người cùng thưởng thức thôi nào.
					Gỏi cuốn tôm thịt là món ngon có đầy đủ chất dinh dưỡng lại rất dễ ăn, không bị ngán nên đặc biệt thích hợp cho bạn cải thiện ẩm thực cuối tuần của gia đình mình.
					Chấm cùng với nước mắm chua ngọt quả là ngon hết sẩy. Cùng vào bếp thực hiện ngay nhé!
					`,
					en: `Step 1: Prepare pork
					Purchased pork is washed with water. To remove the smell of meat, you use a little salt to rub around the piece of meat, wash it 2-3 times with water, and then take it out to dry.
					Next, you put the meat in a pot filled with water, add 1 teaspoon of salt, and then put the pot on the stove to boil over high heat. When the water boils for 3-5 minutes, turn off the heat.
					To remove the dirt on the surface of the meat as well as help the meat become clearer, when taking out the meat, you will wash the meat again with cold water.
					Next, you put the pot on the stove, add the blanched meat just now, pour the water to cover the meat, and then add 1 teaspoon of salt. Turn the heat to medium, and boil the meat for 30–40 minutes until the meat is tender. Turn off the heat, take the meat out on a plate, let it cool, and then cut the meat into thin slices to taste.
					Step 2: Prepare shrimp
					When you buy shrimp, you can leave the head whole or cut off the head as you like, wash it a few times with water, and then put it in the pot.
					Put the pot on the stove, add a little water, cover, turn on medium heat, cook until the shrimp turn red, and pay attention to stirring well.
					Then you take out the shrimp to cool, peel off the shell, cut the shrimp in half lengthwise along the spine, and remove the back of the shrimp. Then you arrange the shrimp on a plate.
					Step 3: Prepare the other ingredients.
					Buy chives, cut off the roots, and wash them. Raw vegetables are eaten with fresh leaves, soaked in diluted salt water for about 10 minutes, washed a few times with water, and then taken out to drain.
					Peel the garlic, remove the stalk, wash it with water, and then mince it.
					Step 4: Roll the salad.
					Spread thin rice paper on a plate, soak a little water in the rice paper to make it easier to roll, then arrange raw vegetables, fresh noodles, meat, shrimp, and chives, and roll all the ingredients to make sure your hands are okay.
					Keep doing this until you run out of ingredients.
					Step 5: Make the dipping sauce.
					Put 2 tablespoons of sugar in a bowl, add 2 tablespoons of filtered water, stir until the sugar dissolves, then add 3 tablespoons of lemon juice and 5 tablespoons of fish sauce, and continue stirring.
					Finally, add all the minced garlic and chili peppers to finish the dipping sauce.
					Step 6: Finished Product
					You put out the shrimp and pork salad with the dipping sauce and invited everyone to enjoy it.
					Shrimp and meat salad is a delicious dish full of nutrients that is easy to eat and not boring, so it is especially suitable for you to improve your family's weekend cuisine.
					Dipping with sweet and sour fish sauce is really delicious. Let's go to the kitchen to do it right now!
					`,
				},
			},
		],
		touristAttractions: [6, 7, 8, 9, 10],
	},
	{
		id: 4,
		name: { vi: "Bánh xèo miền Tây", en: "Crispy Vietnamese Pancake" },
		introduction: {
			vi: `Bánh xèo là món ăn dân dã có mặt ở khắp mọi miền đất nước. Gốc tích của bánh xèo xuất hiện đầu tiên ở miền Trung vùng đất đầy nắng và gió, sau đó được lan truyền ra nhiều nơi khác trên cả nước. Ở mỗi miền bánh xèo lại được biến tấu theo nhiều cách khác nhau nhưng luôn mang hương vị đậm đà, khó cưỡng lại được.
			Bánh xèo có mặt ở miền Tây đã từ rất lâu đời, đến nay đã trở thành một món ăn không thể thiếu trong những buổi hội hè, vui chơi của người dân nơi đây. Bánh xèo miền Tây mang trong mình những nét rất riêng, cái "hồn cốt" của ẩm thực miền Tây Nam Bộ mà không thể lẫn vào đâu được.`,
			en: `Banh xeo is a popular dish found in all parts of the country. The origin of banh xeo appeared first in the central region of the sunny and windy land and then spread to many other places across the country. In each region, banh xeo is modified in different ways but always has a strong and irresistible flavor.
			Banh xeo has been present in the West for a long time, and so far it has become an indispensable dish in the festivals and entertainment of the people here. Western pancakes have their own unique features, the "soul" of the cuisine of the Southwest region, that cannot be confused.
			`,
		},
		imgPath: [
			"/vietnamse-cookery/img/foods/4/1.jpg",
			"/vietnamse-cookery/img/foods/4/2.jpeg",
			"/vietnamse-cookery/img/foods/4/3.png",
		],
		ingredient: {
			vi: [
				"200g bột bánh xèo",
				"50ml nước cốt dừa",
				"300g tôm sú",
				"300g thịt ba chỉ",
				"300g nấm rơm",
				"2 củ hành tây",
				"1 củ cà rốt",
				"1 củ cải trắng",
				"Xà lách, rau cải xanh, rau thơm, giá đỗ, hành lá",
				"Gia vị: hạt nêm, bột ngọt, muối, nước mắm, bột nghệ, giấm",
			],
			en: [
				"200g pancake flour",
				"50 ml of coconut milk",
				"300g black tiger shrimp",
				"300g pork belly",
				"300g straw mushrooms",
				"2 onions",
				"1 carrot",
				"1 white radish",
				"Lettuce, collard greens, herbs, bean sprouts, and green onions",
				"Seasoning: seasoning, monosodium glutamate, salt, fish sauce, turmeric, vinegar",
			],
		},
		steps: [
			{
				name: {
					vi: "Sơ chế nguyên liệu & chuẩn bị",
					en: "Mode ingredients & preparation",
				},
				content: {
					vi: `Bước 1: Sơ chế nguyên liệu

					Thịt ba chỉ tươi mua về rửa sạch, cắt thành những miếng mỏng vừa ăn. Nên chọn thịt ba chỉ tươi ngon sáng màu, có độ đàn hồi tốt.
					Tôm sú mua về, lột vỏ, cắt phần râu cứng, rút chỉ đen ở lưng. Rửa sạch lại với nước.
					Cho tôm, thịt ba chỉ vào 1 cái tô, ướp cùng ½ muỗng hạt nêm, 1 muỗng tiêu xay. Trộn đều và ướp trong khoảng 15 phút cho thịt và tôm thấm gia vị.
					Bóc vỏ hành tây, rửa sạch và thái thành lát mỏng.
					Nhặt gốc, bỏ lá úa, rửa sạch hành lá và thái khúc nhỏ.
					Cà rốt, củ cải trắng gọt sạch vỏ, rửa sạch rồi bào sợi.
					Rau thơm, giá đỗ rửa sạch, ngâm với nước muối loãng khoảng 15 – 20 phút. Vớt ra để ráo nước.
					Bước 2: Pha bột bánh xèo
					
					Hòa tan nước cốt dừa cùng khoảng 400ml nước lọc. Cho bột bánh xèo vào.
					Nêm nếm gia vị cùng 1 muỗng bột nghệ, một ít hạt nêm, muối, rắc hành lá. Khuấy đều cho đến khi bột mịn hoàn toàn và không còn vón cục.
					Để bột nghỉ khoảng 20 – 30 phút cho bột nở hoàn toàn.
					Bước 3: Xào nhân bánh xèo
					Bắc chảo lên, đổ dầu ăn vào, đến khi sôi thì cho thịt vào xào săn với lửa nhỏ.
					Bước 4: Cách làm nước chấm và đồ chua ăn kèm
					Pha nước chấm bánh xèo: Trong lúc đi chiên bánh, bạn có thể pha nước chấm bánh xèo theo tỉ lệ sau: 
					3 muỗng đường 
					½ chén nước mắm 
					½ chén nước ấm 
					1 muỗng nước cốt chanh 
					Hòa trộn tất cả nguyên liệu rồi cho thêm tỏi, ớt băm nhỏ vào là hoàn thành.
					
					Chế biến đồ chua ăn kèm: Củ cải trắng và cà rốt thái sợi cho vào tô, ướp với:
					2 muỗng đường 
					5 muỗng giấm 
					200ml nước lọc 
					Trộn đều rồi để khoảng 10 phút để cho củ cải, cà rốt mềm ra và ngấm vị.
					Khi thịt đã chín tới thì vớt ra 1 cái bát. Cho tôm vào, xào trong khoảng 3 – 5 phút cho tôm chín thơm.
					`,
					en: `Step 1: Prepare ingredients
					Fresh bacon is bought, washed, and cut into thin pieces to eat. Should choose fresh and bright bacon with good elasticity.
					Buy black tiger shrimp, peel them, cut the hard antennae, and remove the black thread on the back. Rinse with water.
					Put shrimp and bacon in a bowl; marinate with 12 teaspoons seasoning and 1 teaspoon ground pepper. Mix well and marinate for about 15 minutes for the meat and shrimp to absorb the spices.
					Peel the onion, wash it, and cut it into thin slices.
					Pick the root, remove the dead leaves, wash the scallions, and cut them into small pieces.
					Carrots and white radishes, peeled, washed, and grated
					Wash herbs and bean sprouts and soak them in dilute salt water for about 15–20 minutes. Take them out to drain.
					Step 2: Mix pancake batter
					Mix coconut milk with about 400 ml of filtered water. Add the pancake batter.
					Season to taste with 1 tablespoon of turmeric powder, a little seasoning, salt, and scallions. Sprinkle with scallions. Stir until the dough is completely smooth and there are no lumps.
					Let the dough rest for about 20–30 minutes for it to fully rise.
					Step 3: Stir-fry the pancakes.
					Put the pan on high, pour in the cooking oil, and when it boils, add the meat and sauté it over low heat.
					Step 4: How to make dipping sauce and sour food to serve
					Mixing Banh Xeo Dipping Sauce: While frying, you can make Banh Xeo dipping sauce according to the following ratio:
					3 tablespoons of sugar
					12 cup fish sauce
					12 cups of warm water
					1 tablespoon of lemon juice
					Mix all ingredients, and then add garlic and minced chili to complete.
					Prepare sour food to serve: White radish and shredded carrots put in a bowl, marinated with:
					2 tablespoons of sugar
					5 tablespoons of vinegar
					200 ml of filtered water
					Mix well, and let it sit for about 10 minutes to let the radishes and carrots soften and absorb the flavors.
					When the meat is cooked, take it out and put it in a bowl. Add shrimp and stir-fry for about 3-5 minutes until shrimp is fragrant.
					`,
				},
			},
			{
				name: {
					vi: "Cách đổ bánh xèo miền Tây",
					en: "How to pour Western pancakes",
				},
				content: {
					vi: `Bắc chảo lên bếp, đổ 1 muỗng dầu ăn vào đến khi sôi thì đổ 1 vá bột vào. Nghiêng chảo để lớp bột trán đều khắp chảo.
					Múc tôm, thịt, hành tây và một ít giá lên trên bột bánh. Đậy vung khoảng 30 giây cho bột chín.
					Chiên bánh đến khi vỏ bánh vàng giòn. Gấp đôi bánh và tiếp tục chiên phần còn lại sao cho bánh giòn đều 2 mặt.
					Chiên bánh tương tự đến khi hết lượng bột và lượng nhân đã chuẩn bị.
					Gắp bánh ra đĩa và thưởng thức ngay khi nóng cùng rau thơm. Chấm cùng nước mắm chua ngọt và đồ chua ăn kèm thì ngon hết sẩy.
					`,
					en: `Put the pan on the stove, pour in 1 tablespoon of cooking oil until it boils, then pour in 1 patch of flour. Tilt the pan to spread the batter evenly across the pan.
					Ladle the shrimp, meat, onion, and some bean sprouts on top of the batter. Cover for about 30 seconds until the dough is cooked.
					Fry until the crust is golden brown. Fold the cake in half and continue to fry the rest so that the cake is crispy on both sides.
					Fry the cake in the same way until all the dough and the prepared filling are used up.
					Remove the cake to a plate and enjoy immediately when hot with herbs. Dipping with sweet and sour fish sauce and accompanying sour food is delicious.`,
				},
			},
		],
		touristAttractions: [11, 12, 13],
	},
	{
		id: 5,
		name: {
			vi: "Bánh đa cua",
			en: "Vietnamese thick noodle soup with crab",
		},
		introduction: {
			vi: `Bánh đa cua là món ăn ngon đặc trưng của Hải Phòng được rất nhiều người yêu thích. Món ngon mang đậm hương vị đất cảng với vị cay cay, đậm đà, thơm lừng, nóng hổi sẽ khiến mọi thành viên trong gia đình vô cùng thích thú.`,
			en: `Vietnamese thick noodle soup with crab is a typical, delicious dish of Hai Phong that is loved by many people. Delicious dishes with the bold flavor of port and a spicy, richaromatic, hot taste will make all family members extremely excited.			`,
		},
		imgPath: [
			"/vietnamse-cookery/img/foods/5/1.jpg",
			"/vietnamse-cookery/img/foods/5/2.jpg",
			"/vietnamse-cookery/img/foods/5/3.jpg",
		],
		ingredient: {
			vi: [
				"500g cua đồng",
				"20g gạch cua",
				"500g sườn non",
				"200g thịt nạc vai băm",
				"300g chả cá chiên",
				"300g mỡ gáy",
				"20g hành tím băm",
				"5g hành tím cắt lát",
				"5g hành tím nguyên củ nướng",
				"50g nấm mèo băm",
				"1 ít lá lốt",
				"5g tôm khô",
				"15g mắm tôm",
				"15g nước cốt me",
				"2 trái cà chua",
				"Bánh đa cua",
				"Gia vị: Đường, muối, hạt nêm, nước mắm, tiêu xay, dầu ăn, bột canh, bột ngọt.",
				"Rau ăn kèm: Xà lách, tía tô, cần nước, rau muống, … rau muống, rau nhút, bạn cần luộc sơ qua trước).",
			],
			en: [
				"500g crab",
				"20g crab bricks",
				"500g pork ribs",
				"200g minced pork shoulder",
				"300g fried fish cake",
				"300g nape fat",
				"20g minced purple onion",
				"5 grams of sliced purple onion",
				"5g roasted whole red onion",
				"50g minced black fungus",
				"1 or 2 bay leaves",
				"5g dried shrimp",
				"15g shrimp paste",
				"15 g of tamarind juice",
				"2 tomatoes",
				"Crab cakes",
				"Spices: Sugar, salt, seasoning, fish sauce, ground…, cooking oil, soup powder, monosodium glutamate.",
				"Accompanying vegetables: Lettuce, perilla, water, …spinach, and spinach; you need to boil it first).",
			],
		},
		steps: [
			{
				name: {
					vi: "Sơ chế cua đồng",
					en: "Preliminary processing of crabs",
				},
				content: {
					vi: `Cho cua vào trong nồi, đậy kín nắp vung rồi xóc đều. Lấy cua ra ngoài rửa lại nhiều lần với nước, tách bỏ phần yếm, mai chỉ lấy phần thân và tách gạch cho vào bát để riêng.
					Cho phần thân cua vào máy xay rồi xay nhuyễn, trong trường hợp không có máy bạn có thể cho vào cối giã nhuyễn.
					Cho thịt cua đã xay ra bát, pha thêm nước, khuấy đều rồi dùng rây (hoặc túi vải) lược lấy phần nước và loại bỏ bã.
					`,
					en: `Put the crab in the pot, cover the lid, and stir well. Take the crab out and wash it several times with water. Remove the bib; just take the body and separate the bricks into a separate bowl.
					Put the crab body in the blender and puree it; if you don't have a machine, you can put it in the mortar.
					Put the minced crab meat into a bowl, add water, stir well, and then use a sieve (or cloth bag) to comb out the water and remove the residue.
					`,
				},
			},
			{
				name: {
					vi: "Nấu nước dùng cua",
					en: "Cook crab broth.",
				},
				content: {
					vi: `Cho nước cua vừa lọc vào nồi, bắc lên bếp. Để có được món bánh đa cua ngon, bạn đừng quên cho thêm 5g hạt nêm vào cùng.
					Dùng muỗng khuấy đều theo chiều kim đồng hồ. Cho đến khi nước sôi, riêu cua kết tủa và nổi trên bề mặt nồi thì vớt ra ngoài để trong bát.
					`,
					en: `Put the filtered crab water into the pot and put it on the stove. To get a delicious crab cake, don't forget to add 5 grams of seasoning seeds.
					Use a spoon to stir in a clockwise direction. Until the water boils and the crab sauce precipitates and floats on the surface of the pot, take it out and put it in a bowl.
					`,
				},
			},
			{
				name: {
					vi: "Nấu nước dùng xương",
					en: "Cooking bone broth",
				},
				content: {
					vi: `Rửa sạch sườn heo với nước muối rồi chần sơ qua với nước sôi trong khoảng 3 phút để khử đi mùi hôi và loại bỏ các chất bẩn, vớt sườn heo ra ngoài đi rửa lại với nước.
					Cho sườn, hành tím nướng vào nồi, đổ thêm 3 lít nước, bắc lên bếp tiến hành ninh. Khi sườn chín mềm, bạn vớt sườn ra ngoài. Lưu ý, đối với công đoạn này trong cách làm bánh đa cua bạn cần thường xuyên vớt bỏ lớp bọt nổi trên bề mặt để nước dùng có màu đẹp mắt.
					`,
					en: `Rinse pork ribs with salt water and then briefly blanch with boiling water for about 3 minutes to remove odors and dirt. Take out the pork ribs and rinse with water.
					Put the ribs and grilled shallots into the pot, add 3 liters of water, and put it on the stove to cook. When the ribs are tender, take them out. Note that at this stage of how to make crab cakes, you need to regularly remove the foam floating on the surface so that the broth has a beautiful color.
					`,
				},
			},
			{
				name: {
					vi: "Làm tóp mỡ",
					en: "Make fat",
				},
				content: {
					vi: `Rửa sạch miếng thịt mỡ với nước muối pha loãng rồi cắt thành hạt lựu nhỏ.
					Chần thịt mỡ cắt hạt lựu với nước sôi trong vòng vài phút rồi cho vào cho vào chảo, bắc lên bếp thắng cho đến khi vàng, giòn.
					`,
					en: `Wash the fatty meat with diluted salt water and cut it into small dice.
					Blanch the diced fatty meat with boiling water for a few minutes, then put it in the pan and put it on the stove until golden and crispy.`,
				},
			},
			{
				name: {
					vi: "Làm chả lá lốt",
					en: "Making pork rolls",
				},
				content: {
					vi: `Cho thịt nạc xay vào trong bát lớn, thêm 20g hành tím băm, 5g đường, 5g tiêu xay, 5g nước mắm, 5g hạt nêm và nấm mèo cắt sợi, trộn đều.
					Rửa sạch lá lốt với nước muối pha loãng, để trên rổ cho ráo nước hoặc bạn có thể dùng khăn để lau sơ qua.
					Trải lá lốt lên mặt phẳng (đĩa, thớt), cho thịt vào giữa rồi cuộn tròn một cách khéo léo.
					Bắc chảo lên bếp, cho tiếp 5g dầu ăn vào đun sôi rồi cho chả lá lốt vào chiên chín vàng đều các mặt.
					`,
					en: `In a large mixing bowl, combine the ground lean meat, 20g minced shallot, 5g sugar, 5g ground pepper, 5g fish sauce, 5g seasoning seeds, and cut mushrooms.
					Wash the bay leaves with diluted salt water, leave them on a basket to drain, or you can use a towel to wipe them off.
					Spread the leaves on a flat surface (plate, cutting board), put the meat in the middle, and then roll it up skillfully.
					Put the pan on the stove, add 5g of cooking oil, bring to a boil, and then fry the guava leaves until golden brown on all sides.
					`,
				},
			},
			{
				name: {
					vi: "Nấu nước dùng bánh đa cua",
					en: "Cooking crab cake broth",
				},
				content: {
					vi: `Bắc chảo khác lên bếp, tiếp tục cho 5g dầu ăn vào đun sôi. Dầu nóng, cho 5g hành tím băm nhỏ vào phi thơm rồi cho gạch cua, cà chua bổ múi cau, 5g hạt nêm, đảo đều.
					Cho nước dùng cua cùng nước ninh sườn heo vào chung nồi lớn, bắc lên bếp tiếp tục đun. Cách làm bánh đa cua Hải Phòng ngon làm xiêu lòng người ăn là bạn nêm thêm 20g đường cát, 25g bột canh, 15g bột ngọt, 5g tôm khô, 15g mắm tôm, 15g nước cốt me cùng cà chua vừa xào vào cùng.
					`,
					en: `Put another pan on the stove and continue to add 5g of cooking oil to bring it to a boil. Heat oil, add 5g of chopped red onion and sauté it until fragrant, then add crab bricks, tomatoes to add areca, and 5 g of seasoning seeds. Stir well.
					Put crab broth and pork rib broth in a large pot and put it on the stove to continue cooking. How to make delicious Hai Phong crab cakes that captivate people is to add 20 grams of granulated sugar, 25 grams of soup powder, 15 grams of monosodium glutamate, 5 grams of dried shrimp, 15 grams of shrimp paste, 15 grams of tamarind juice, and sautéed tomatoes.
					`,
				},
			},
			{
				name: {
					vi: "Trình bày và thưởng thức",
					en: "Present and enjoy",
				},
				content: {
					vi: `Cho bánh đa cua ngâm trong âu nước lạnh khoảng 5 phút, rửa sạch, để ráo nước rồi chần sơ qua nước sôi trong vòng 20-30 giây, cho vào bát.
					Tiếp tục xếp sườn, riêu cua, chả lá lốt chiên, chả cá chiên tóp mỡ lên trên, chan nước dùng là đã có thể thưởng thức kèm với các loại rau sống đã chuẩn bị trước đó.
					`,
					en: `Let the crab cakes soak in a bowl of cold water for about 5 minutes, wash, drain, then blanch in boiling water for 20–30 seconds and put in a bowl.
					Continue to arrange ribs, crab sauce, fried bay leaf rolls, fried fish cakes with fat on top, and chan broth with previously prepared raw vegetables.
					`,
				},
			},
			{
				name: {
					vi: "Yêu cầu thành phẩm:",
					en: "Finished Product Requirements",
				},
				content: {
					vi: `Bát bánh đa cua nóng hổi, có hương thơm đặc trưng, màu sắc bắt mắt cuốn hút người ăn.
					Sợi bánh đa chín, vừa mềm vừa dai. Nước dùng có vị thanh ngọt tự nhiên.
					Chả lá lốt thơm, chả cá dai, sườn chín mềm, gạch cua béo, rau ăn kèm tươi giòn.
					`,
					en: `The bowl of crab cakes is hot, has a characteristic aroma, and has eye-catching colors that attract people to eat them.
					The rice paper is cooked, soft, and chewy. The broth has a naturally sweet taste.
					Fragrant bay leaf rolls, chewy fish cakes, soft-cooked ribs, fatty crab bricks, and fresh and crunchy vegetables
					`,
				},
			},
			{
				name: {
					vi: "Một số lưu ý",
					en: "Some note",
				},
				content: {
					vi: `Nên chọn mua cua vào thời điểm đầu hoặc cuối tháng.
					Cua đồng thường có màu sáng đục ở phần mai.
					Chọn những con cua còn đầy đủ chân, càng, di chuyển nhanh nhẹn.
					Dùng tay ấn vào phần yếm, nếu thấy có bọt khí thì là cua tươi, ngon và ngược lại.
					Nên chọn những miếng sườn có cả nạc lẫn mỡ.
					Lựa những miếng sườn có xương dẹt, nhỏ, ít xương và nhiều thịt.
					Những miếng sườn có màu hồng nhạt, khi ấn tay vào có độ đàn hồi cao là sườn tươi ngon.
					Làm bánh đa cua đúng chuẩn Hải Phòng, bạn nên dùng loại bánh đa đỏ.
					`,
					en: `Should choose to buy crabs at the beginning or end of the month.
					Copper crabs are usually bright and opaque in the carapace.
					Choose crabs that have full legs and claws and move quickly.
					Use your hand to press the bib; if there are air bubbles, then the crab is fresh and delicious, and vice versa.
					Choose ribs that are both lean and fat.
					Choose ribs with flat, small bones, less bone, and more meat.
					The ribs are light pink; when pressed with high elasticity, the ribs are fresh.
					To make crab cakes according to Hai Phong standards, you should use red rice paper.
					`,
				},
			},
		],
		touristAttractions: [14, 15, 16, 17],
	},
];

export default foods;
