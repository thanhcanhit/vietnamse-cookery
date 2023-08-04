import { Food } from "./interface";

const foods: Food[] = [
	{
		id: 1,
		name: "Bún Bò Huế",
		description: `Bún bò Huế không những là đặc sản của xứ Huế mộng mơ mà còn của nền ẩm thực Việt Nam. Sự kết hợp tuyệt vời giữa nước dùng đậm đà hoà cùng chút cay nồng của sa tế và mùi vị đặc biệt của mắm ruốc tạo nên hương vị ngon khó cưỡng cho thực khách ngay lần đầu thưởng thức.
    Tuy nguyên liệu để nấu bún bò chuẩn vị khá nhiều nhưng cách chế biến lại không hề cầu kỳ, phức tạp. Bạn chỉ cần tỉ mỉ lựa chọn những nguyên liệu tươi ngon và đầy đủ gia vị cần thiết là đã có thể bắt tay vào thực hiện ngay món ăn này rồi.`,
		imgPath: ["img/food/1/1.jpg", "img/food/1/2.jpg", "img/food/1/3.jpg"],
		ingredient: [
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
			"",
		],
		steps: [
			{
				name: "Sơ chế nguyên liệu",
				content: `Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.
    Giò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.
    Các loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.
    Ớt tươi: cắt nhỏ, cho vào nước mắm.
    Hành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.
    Huyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.
    Pha phần mắm ruốc Huế với ½ chén nước, khuấy đều.
    `,
			},
			{
				name: "Cách nấu bún bò huế",
				content: `Bước 1: Bạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.
        Bước 2: Bắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nắp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.
        Bước 3: Với phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.
        Lưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.
        Bước 4: Cho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. 
        Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.
        Nếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.
    `,
			},
			{
				name: "Trình bày món ăn",
				content: `Trụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…
        `,
			},
		],
		touristAttractions: [1, 2],
	},
	{
		id: 4,
		name: "Bún Bò Huế",
		description: `Bún bò Huế không những là đặc sản của xứ Huế mộng mơ mà còn của nền ẩm thực Việt Nam. Sự kết hợp tuyệt vời giữa nước dùng đậm đà hoà cùng chút cay nồng của sa tế và mùi vị đặc biệt của mắm ruốc tạo nên hương vị ngon khó cưỡng cho thực khách ngay lần đầu thưởng thức.
    Tuy nguyên liệu để nấu bún bò chuẩn vị khá nhiều nhưng cách chế biến lại không hề cầu kỳ, phức tạp. Bạn chỉ cần tỉ mỉ lựa chọn những nguyên liệu tươi ngon và đầy đủ gia vị cần thiết là đã có thể bắt tay vào thực hiện ngay món ăn này rồi.`,
		imgPath: ["img/food/1/2.jpg", "img/food/1/2.jpg", "img/food/1/3.jpg"],
		ingredient: [
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
			"",
		],
		steps: [
			{
				name: "Sơ chế nguyên liệu",
				content: `Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.
    Giò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.
    Các loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.
    Ớt tươi: cắt nhỏ, cho vào nước mắm.
    Hành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.
    Huyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.
    Pha phần mắm ruốc Huế với ½ chén nước, khuấy đều.
    `,
			},
			{
				name: "Cách nấu bún bò huế",
				content: `Bước 1: Bạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.
        Bước 2: Bắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nắp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.
        Bước 3: Với phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.
        Lưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.
        Bước 4: Cho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. 
        Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.
        Nếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.
    `,
			},
			{
				name: "Trình bày món ăn",
				content: `Trụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…
        `,
			},
		],
		touristAttractions: [1, 2],
	},
	{
		id: 2,
		name: "Bún Bò Huế",
		description: `Bún bò Huế không những là đặc sản của xứ Huế mộng mơ mà còn của nền ẩm thực Việt Nam. Sự kết hợp tuyệt vời giữa nước dùng đậm đà hoà cùng chút cay nồng của sa tế và mùi vị đặc biệt của mắm ruốc tạo nên hương vị ngon khó cưỡng cho thực khách ngay lần đầu thưởng thức.
    Tuy nguyên liệu để nấu bún bò chuẩn vị khá nhiều nhưng cách chế biến lại không hề cầu kỳ, phức tạp. Bạn chỉ cần tỉ mỉ lựa chọn những nguyên liệu tươi ngon và đầy đủ gia vị cần thiết là đã có thể bắt tay vào thực hiện ngay món ăn này rồi.`,
		imgPath: ["img/food/1/3.jpg", "img/food/1/2.jpg", "img/food/1/3.jpg"],
		ingredient: [
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
			"",
		],
		steps: [
			{
				name: "Sơ chế nguyên liệu",
				content: `Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.
    Giò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.
    Các loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.
    Ớt tươi: cắt nhỏ, cho vào nước mắm.
    Hành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.
    Huyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.
    Pha phần mắm ruốc Huế với ½ chén nước, khuấy đều.
    `,
			},
			{
				name: "Cách nấu bún bò huế",
				content: `Bước 1: Bạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.
        Bước 2: Bắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nắp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.
        Bước 3: Với phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.
        Lưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.
        Bước 4: Cho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. 
        Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.
        Nếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.
    `,
			},
			{
				name: "Trình bày món ăn",
				content: `Trụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…
        `,
			},
		],
		touristAttractions: [1, 2],
	},
	{
		id: 3,
		name: "Bún Bò Huế",
		description: `Bún bò Huế không những là đặc sản của xứ Huế mộng mơ mà còn của nền ẩm thực Việt Nam. Sự kết hợp tuyệt vời giữa nước dùng đậm đà hoà cùng chút cay nồng của sa tế và mùi vị đặc biệt của mắm ruốc tạo nên hương vị ngon khó cưỡng cho thực khách ngay lần đầu thưởng thức.
    Tuy nguyên liệu để nấu bún bò chuẩn vị khá nhiều nhưng cách chế biến lại không hề cầu kỳ, phức tạp. Bạn chỉ cần tỉ mỉ lựa chọn những nguyên liệu tươi ngon và đầy đủ gia vị cần thiết là đã có thể bắt tay vào thực hiện ngay món ăn này rồi.`,
		imgPath: ["img/food/1/1.jpg", "img/food/1/2.jpg", "img/food/1/3.jpg"],
		ingredient: [
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
			"",
		],
		steps: [
			{
				name: "Sơ chế nguyên liệu",
				content: `Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.
    Giò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.
    Các loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.
    Ớt tươi: cắt nhỏ, cho vào nước mắm.
    Hành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.
    Huyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.
    Pha phần mắm ruốc Huế với ½ chén nước, khuấy đều.
    `,
			},
			{
				name: "Cách nấu bún bò huế",
				content: `Bước 1: Bạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.
        Bước 2: Bắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nắp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.
        Bước 3: Với phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.
        Lưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.
        Bước 4: Cho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. 
        Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.
        Nếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.
    `,
			},
			{
				name: "Trình bày món ăn",
				content: `Trụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…
        `,
			},
		],
		touristAttractions: [1, 2],
	},
	{
		id: 5,
		name: "Bún Bò Huế",
		description: `Bún bò Huế không những là đặc sản của xứ Huế mộng mơ mà còn của nền ẩm thực Việt Nam. Sự kết hợp tuyệt vời giữa nước dùng đậm đà hoà cùng chút cay nồng của sa tế và mùi vị đặc biệt của mắm ruốc tạo nên hương vị ngon khó cưỡng cho thực khách ngay lần đầu thưởng thức.
    Tuy nguyên liệu để nấu bún bò chuẩn vị khá nhiều nhưng cách chế biến lại không hề cầu kỳ, phức tạp. Bạn chỉ cần tỉ mỉ lựa chọn những nguyên liệu tươi ngon và đầy đủ gia vị cần thiết là đã có thể bắt tay vào thực hiện ngay món ăn này rồi.`,
		imgPath: ["img/food/1/1.jpg", "img/food/1/2.jpg", "img/food/1/3.jpg"],
		ingredient: [
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
			"",
		],
		steps: [
			{
				name: "Sơ chế nguyên liệu",
				content: `Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.
    Giò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.
    Các loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.
    Ớt tươi: cắt nhỏ, cho vào nước mắm.
    Hành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.
    Huyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.
    Pha phần mắm ruốc Huế với ½ chén nước, khuấy đều.
    `,
			},
			{
				name: "Cách nấu bún bò huế",
				content: `Bước 1: Bạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.
        Bước 2: Bắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nắp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.
        Bước 3: Với phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.
        Lưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.
        Bước 4: Cho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. 
        Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.
        Nếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.
    `,
			},
			{
				name: "Trình bày món ăn",
				content: `Trụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…
        `,
			},
		],
		touristAttractions: [1, 2],
	},
];

export default foods;
