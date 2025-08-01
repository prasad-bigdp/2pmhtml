const mainDiv = document.getElementById('main');
const cars = [
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
		title: "Mazda MX-5",
		start_production: 1989,
		class: "Sports car Roadster",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
		title: "Volkswagen Kübelwagen",
		class: "Military vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
		title: "Porsche Cayenne",
		start_production: 2002,
		class: "Mid-size luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
		title: "Vauxhall Chevette",
		start_production: 1975,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
		title: "Dymaxion car",
		start_production: 1933,
		class: "Concept car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
		title: "Ford Crown Victoria",
		start_production: 1955,
		class: "Full-size Ford",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
		title: "Plymouth Superbird",
		start_production: 1970,
		class: "Muscle car(today) and Race car(Past)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
		title: "Saab 9000",
		start_production: 1984,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
		title: "Pontiac Sunfire",
		start_production: 1994,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG",
		title: "AMC Javelin",
		start_production: 1967,
		class: "{{Unbulleted list| Pony car | Muscle car },},",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
		title: "Jaguar X-Type",
		start_production: 2001,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
		title: "Volkswagen Phaeton",
		start_production: 2002,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg",
		title: "Pontiac G6",
		start_production: 2004,
		class: "Midsize",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ford500a.JPG/400px-Ford500a.JPG",
		title: "Ford Five Hundred",
		start_production: 2004,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PontiacSolstice.jpg/400px-PontiacSolstice.jpg",
		title: "Pontiac Solstice",
		start_production: 2005,
		class: "Roadster, coupe",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fiat_tipo_f.jpg/400px-Fiat_tipo_f.jpg",
		title: "Fiat Tipo",
		start_production: 1988,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/400px-1985-89_Plymouth_Reliant_K_LE.png",
		title: "Plymouth Reliant",
		start_production: 1981,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/1978_chevette.JPG/400px-1978_chevette.JPG",
		title: "Chevrolet Chevette",
		start_production: 1975,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg/400px-Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg",
		title: "SEAT León",
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chevrolet_Corsica_1994.jpg/400px-Chevrolet_Corsica_1994.jpg",
		title: "Chevrolet Corsica",
		start_production: 1987,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1992_MX3_V6_24V.jpg/400px-1992_MX3_V6_24V.jpg",
		title: "Mazda MX-3",
		start_production: 1991,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg",
		title: "TVR Tuscan Speed Six",
		start_production: 1999,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Aston_Martin_DB9_coupe_02.jpg/400px-Aston_Martin_DB9_coupe_02.jpg",
		title: "Aston Martin DB9",
		start_production: 2004,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pontiac_Catalina_front.jpg/400px-Pontiac_Catalina_front.jpg",
		title: "Pontiac Catalina",
		start_production: 1950,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oldsmobile_Toronado_0003.jpg/400px-Oldsmobile_Toronado_0003.jpg",
		title: "Oldsmobile Toronado",
		start_production: 1965,
		class: "Full-size personal luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chrysler_Cirrus_--_01-27-2012.jpg/400px-Chrysler_Cirrus_--_01-27-2012.jpg",
		title: "Chrysler Cirrus",
		start_production: 1994,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/VW_Corrado_-_standard.jpg/400px-VW_Corrado_-_standard.jpg",
		title: "Volkswagen Corrado",
		start_production: 1988,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg/400px-Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg",
		title: "Mercedes-Benz R-Class",
		class: "Full-size CUV / Large MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Volvo_V50_1.6_D.jpg/400px-Volvo_V50_1.6_D.jpg",
		title: "Volvo V50",
		start_production: 2004,
		class: "Compact / Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg/400px-Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg",
		title: "Audi TT",
		class: "Sport compact Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg/400px-VW_Touareg_Exclusive_V6_TDI_BlueMotion_Technology_%28II%29_%E2%80%93_Frontansicht%2C_3._Juli_2013%2C_M%C3%BCnster.jpg",
		title: "Volkswagen Touareg",
		start_production: 2002,
		class: "Mid-size luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Red92VR4rear.jpg/400px-Red92VR4rear.jpg",
		title: "Mitsubishi GTO",
		start_production: 1990,
		class: "Sports car, grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cadillac_Cimarron_2_--_07-01-2009.jpg/400px-Cadillac_Cimarron_2_--_07-01-2009.jpg",
		title: "Cadillac Cimarron",
		start_production: 1981,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/1991_Daytona_CS.JPG/400px-1991_Daytona_CS.JPG",
		title: "Dodge Daytona",
		start_production: 1984,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cadillac_Allante.jpg/400px-Cadillac_Allante.jpg",
		title: "Cadillac Allanté",
		start_production: 1986,
		class: "Luxury roadster",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Toyota_Avensis_III_20090706_front.JPG/400px-Toyota_Avensis_III_20090706_front.JPG",
		title: "Toyota Avensis",
		start_production: 1997,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Mercedes_300SL_Coupe_vr_silver_EMS.jpg/400px-Mercedes_300SL_Coupe_vr_silver_EMS.jpg",
		title: "Mercedes-Benz 300 SL",
		start_production: 1952,
		class: "Sports car, GT",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Audi_80_B1234.jpg/400px-Audi_80_B1234.jpg",
		title: "Audi 80",
		start_production: 1997,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audi_A2_front_20071002.jpg/400px-Audi_A2_front_20071002.jpg",
		title: "Audi A2",
		start_production: 1999,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oldsmobile-Intrigue.jpg/400px-Oldsmobile-Intrigue.jpg",
		title: "Oldsmobile Intrigue",
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/91RT_1.jpg/400px-91RT_1.jpg",
		title: "Dodge Spirit",
		start_production: 1989,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/%2782-%2784_Pontiac_6000_Coupe.jpg/400px-%2782-%2784_Pontiac_6000_Coupe.jpg",
		title: "Pontiac 6000",
		start_production: 1982,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dodge-Shadow-Coupe.jpg/400px-Dodge-Shadow-Coupe.jpg",
		title: "Dodge Shadow",
		start_production: 1986,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Oldsmobile_Alero_sedan_--_03-16-2012.JPG/400px-Oldsmobile_Alero_sedan_--_03-16-2012.JPG",
		title: "Oldsmobile Alero",
		start_production: 1998,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2006_Chrysler_Crossfire_%28ZH_MY05%29_coupe_%282015-11-11%29_01.jpg/400px-2006_Chrysler_Crossfire_%28ZH_MY05%29_coupe_%282015-11-11%29_01.jpg",
		title: "Chrysler Crossfire",
		start_production: 2003,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/1968_AMC_AMX_white_at_Rockville_Maryland_show_2007.jpg/400px-1968_AMC_AMX_white_at_Rockville_Maryland_show_2007.jpg",
		title: "AMC AMX",
		start_production: 1968,
		class: "Grand tourer, Muscle car, Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/93_Dodge_Dynasty_%2814344073600%29.jpg/400px-93_Dodge_Dynasty_%2814344073600%29.jpg",
		title: "Dodge Dynasty",
		start_production: 1988,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Audi_A5_Coup%C3%A9_2.0_TFSI_quattro_S_tronic_Gletscherwei%C3%9F_Facelift.JPG/400px-Audi_A5_Coup%C3%A9_2.0_TFSI_quattro_S_tronic_Gletscherwei%C3%9F_Facelift.JPG",
		title: "Audi A5",
		start_production: 2007,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2015_Audi_A4_B9_3.0_TDI_quattro_V6_200_kW_S_line_Tangorot_Vorderansicht_%28cropped%29.jpg/400px-2015_Audi_A4_B9_3.0_TDI_quattro_V6_200_kW_S_line_Tangorot_Vorderansicht_%28cropped%29.jpg",
		title: "Audi A4",
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cadillac_V-16_Roadster_1930.jpg/400px-Cadillac_V-16_Roadster_1930.jpg",
		title: "Cadillac V-16",
		start_production: 1930,
		class: "Luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Fiero88.JPG/400px-Fiero88.JPG",
		title: "Pontiac Fiero",
		start_production: 1983,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/1990_240sx_Quarter_View.JPG/400px-1990_240sx_Quarter_View.JPG",
		title: "Nissan 240SX",
		start_production: 1989,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2008_Chrysler_300.jpg/400px-2008_Chrysler_300.jpg",
		title: "Chrysler 300",
		start_production: 2003,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Volvo_C30_RDesign_HRes.jpg/400px-Volvo_C30_RDesign_HRes.jpg",
		title: "Volvo C30",
		start_production: 2006,
		class: "Premium compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Plymouth_Duster_%28Orange_Julep%29.jpg/400px-Plymouth_Duster_%28Orange_Julep%29.jpg",
		title: "Plymouth Duster",
		start_production: 1969,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mazda_Xedos_9.JPG/400px-Mazda_Xedos_9.JPG",
		title: "Mazda Millenia",
		start_production: 1992,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fiat_Tempra_SX_%2793.jpg/400px-Fiat_Tempra_SX_%2793.jpg",
		title: "Fiat Tempra",
		start_production: 1990,
		class: "Family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Opel_Calibra_front_20071007.jpg/400px-Opel_Calibra_front_20071007.jpg",
		title: "Opel Calibra",
		start_production: 1989,
		class: "Coupé",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2001-2005_Peugeot_307_%28T5%29_5-door_hatchback_%282011-03-10%29.jpg/400px-2001-2005_Peugeot_307_%28T5%29_5-door_hatchback_%282011-03-10%29.jpg",
		title: "Peugeot 307",
		start_production: 2001,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2005_Peugeot_407_ST_HDi_Executive_sedan_%282015-07-09%29_01.jpg/400px-2005_Peugeot_407_ST_HDi_Executive_sedan_%282015-07-09%29_01.jpg",
		title: "Peugeot 407",
		start_production: 2004,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Simca_Chrysler_Horizon_GLS_1979.jpg/400px-Simca_Chrysler_Horizon_GLS_1979.jpg",
		title: "Simca-Talbot Horizon",
		start_production: 1978,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/OPEL-VAUX-SINTRA-A.jpg/400px-OPEL-VAUX-SINTRA-A.jpg",
		title: "Opel Sintra",
		start_production: 1996,
		class: "Large MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Fiat_Stilo_front_20080711.jpg/400px-Fiat_Stilo_front_20080711.jpg",
		title: "Fiat Stilo",
		start_production: 2001,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ford_Fairmont_sedan_2.jpg/400px-Ford_Fairmont_sedan_2.jpg",
		title: "Ford Fairmont",
		start_production: 1978,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/1990_Dodge_Omni.JPG/400px-1990_Dodge_Omni.JPG",
		title: "Dodge Omni",
		start_production: 1977,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/00-02_Saturn_L-Series_sedan.jpg/400px-00-02_Saturn_L-Series_sedan.jpg",
		title: "Saturn L-Series",
		start_production: 1999,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Saturn_Ion_--_07-09-2009.jpg/400px-Saturn_Ion_--_07-09-2009.jpg",
		title: "Saturn Ion",
		start_production: 2002,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/1996-1999_Saturn_SL2_--_03-16-2012.JPG/400px-1996-1999_Saturn_SL2_--_03-16-2012.JPG",
		title: "Saturn S-Series",
		start_production: 1991,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Chrysler_E_Class%2C_1984.png/400px-Chrysler_E_Class%2C_1984.png",
		title: "Chrysler E-Class",
		start_production: 1982,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Plymouth_Caravelle%2C_83-85.png/400px-Plymouth_Caravelle%2C_83-85.png",
		title: "Plymouth Caravelle",
		start_production: 1985,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/1984_Dodge_600_ES_Turbo.jpg/400px-1984_Dodge_600_ES_Turbo.jpg",
		title: "Dodge 600",
		start_production: 1983,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%2782_Dodge_400_Coupe_%28Orange_Julep%29.JPG/400px-%2782_Dodge_400_Coupe_%28Orange_Julep%29.JPG",
		title: "Dodge 400",
		start_production: 1981,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/1990_Plymouth_Laser_RS_Turbo_red.jpg/400px-1990_Plymouth_Laser_RS_Turbo_red.jpg",
		title: "Plymouth Laser",
		start_production: 1989,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2002-2004_Chrysler_300M_--_05-23-2012.JPG/400px-2002-2004_Chrysler_300M_--_05-23-2012.JPG",
		title: "Chrysler 300M",
		start_production: 1998,
		class: "Full-size luxury sports sedan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/1995_Vision_TSi_sedan.jpg/400px-1995_Vision_TSi_sedan.jpg",
		title: "Eagle Vision",
		start_production: 1993,
		class: "Full-size luxury sports sedan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Chrysler-Concorde-Limited.jpg/400px-Chrysler-Concorde-Limited.jpg",
		title: "Chrysler Concorde",
		start_production: 1993,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/1992_Eagle_Premier_ES_Limited.jpg/400px-1992_Eagle_Premier_ES_Limited.jpg",
		title: "Eagle Premier",
		start_production: 1987,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lancia_Thema_8.32_Ferrari.jpg/400px-Lancia_Thema_8.32_Ferrari.jpg",
		title: "Lancia Thema",
		start_production: 1984,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/en/7/7e/76_Pontiac_Astre.jpg",
		title: "Pontiac Astre",
		start_production: 1972,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Vega_clay_model.jpg/400px-Vega_clay_model.jpg",
		title: "Chevrolet Vega",
		start_production: 1970,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Oldsmobile_Firenza_coupe_2.jpg/400px-Oldsmobile_Firenza_coupe_2.jpg",
		title: "Oldsmobile Firenza",
		start_production: 1982,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/1/18/75_Chevy_Monza_2%2B2.jpg",
		title: "Chevrolet Monza",
		start_production: 1974,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW_6er_Coup%C3%A9_Facelift_20090808_front.JPG/400px-BMW_6er_Coup%C3%A9_Facelift_20090808_front.JPG",
		title: "BMW 6 Series (E63)",
		start_production: 2003,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Chevrolet_Citation_II_front.jpg/400px-Chevrolet_Citation_II_front.jpg",
		title: "Chevrolet Citation",
		start_production: 1980,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/96-98_Mercury_Villager_--_12-26-2009.jpg/400px-96-98_Mercury_Villager_--_12-26-2009.jpg",
		title: "Mercury Villager",
		start_production: 1992,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nissan350Z-01.jpg/400px-Nissan350Z-01.jpg",
		title: "Nissan 350Z",
		start_production: 2002,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hummer_H2_black.JPG/400px-Hummer_H2_black.JPG",
		title: "Hummer H2",
		start_production: 2002,
		class: "Full-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cadillac_XLR_2006.jpg/400px-Cadillac_XLR_2006.jpg",
		title: "Cadillac XLR",
		start_production: 2003,
		class: "Luxury roadster",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cadillac--STS.jpg/400px-Cadillac--STS.jpg",
		title: "Cadillac STS",
		start_production: 2005,
		class: "Mid-size luxury sedan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/04-07_Buick_Rendezvous_.jpg/400px-04-07_Buick_Rendezvous_.jpg",
		title: "Buick Rendezvous",
		start_production: 2001,
		class: "Mid-size crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/CT2007SciontC.jpg/400px-CT2007SciontC.jpg",
		title: "Scion tC",
		start_production: 2004,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/97-99_Cadillac_Catera_.jpg/400px-97-99_Cadillac_Catera_.jpg",
		title: "Cadillac Catera",
		start_production: 1997,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fiat_Coup%C3%A9_front_20090604.jpg/400px-Fiat_Coup%C3%A9_front_20090604.jpg",
		title: "Fiat Coupé",
		start_production: 1993,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2002-05_Pontiac_Aztek.jpg/400px-2002-05_Pontiac_Aztek.jpg",
		title: "Pontiac Aztek",
		start_production: 2000,
		class: "Mid-size crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mercury-Milan-Premier.JPG/400px-Mercury-Milan-Premier.JPG",
		title: "Mercury Milan",
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Audi_Quattro_vl_black.jpg/400px-Audi_Quattro_vl_black.jpg",
		title: "Audi Quattro",
		start_production: 1980,
		class: "Mid-size car, rally car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Volvo_V40_2012_ID42221_280212.jpg/400px-Volvo_V40_2012_ID42221_280212.jpg",
		title: "Volvo V40 (P1)",
		start_production: 2012,
		class: "Compact car / Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/LincolnAviator.jpg/400px-LincolnAviator.jpg",
		title: "Lincoln Aviator",
		start_production: 2002,
		class: "Mid-size luxury SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/00-02_Lincoln_LS_.jpg/400px-00-02_Lincoln_LS_.jpg",
		title: "Lincoln LS",
		start_production: 1999,
		class: "Mid-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/2002_Lincoln_Blackwood_2.jpg/400px-2002_Lincoln_Blackwood_2.jpg",
		title: "Lincoln Blackwood",
		start_production: 2001,
		class: "Full-size luxury pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/89mark.jpg/400px-89mark.jpg",
		title: "Lincoln Continental Mark VII",
		start_production: 1983,
		class: "Personal luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Mark_VIII.JPG/400px-Mark_VIII.JPG",
		title: "Lincoln Mark VIII",
		start_production: 1992,
		class: "Personal luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ford_Aerostar_LWB_1992-97.jpg/400px-Ford_Aerostar_LWB_1992-97.jpg",
		title: "Ford Aerostar",
		start_production: 1985,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vw_t3_s_sst.jpg/400px-Vw_t3_s_sst.jpg",
		title: "Volkswagen Type 2 (T3)",
		start_production: 1979,
		class: "Light commercial vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/White_Alfa_Romeo_164.jpg/400px-White_Alfa_Romeo_164.jpg",
		title: "Alfa Romeo 164",
		start_production: 1987,
		class: "Mid-size luxury / Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2004_Scion_xA_--_NHTSA.jpg/400px-2004_Scion_xA_--_NHTSA.jpg",
		title: "Scion xA",
		start_production: 2004,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Alfa_155_WB_crop.JPG/400px-Alfa_155_WB_crop.JPG",
		title: "Alfa Romeo 155",
		start_production: 1992,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/2001_Rover_75_Connoisseur_sedan_%282015-07-09%29_01.jpg/400px-2001_Rover_75_Connoisseur_sedan_%282015-07-09%29_01.jpg",
		title: "Rover 75",
		start_production: 1998,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2011_Infiniti_M37_--_NHTSA_1.jpg/400px-2011_Infiniti_M37_--_NHTSA_1.jpg",
		title: "Infiniti M",
		start_production: 1989,
		class: "Mid-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dodge_Aspen_2-door_sedan_brown.jpg/400px-Dodge_Aspen_2-door_sedan_brown.jpg",
		title: "Dodge Aspen",
		start_production: 1975,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1977Diplomat.jpg/400px-1977Diplomat.jpg",
		title: "Dodge Diplomat",
		start_production: 1976,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chrysler_Neon_2001_by_a_Norwegian_fjord.JPG/400px-Chrysler_Neon_2001_by_a_Norwegian_fjord.JPG",
		title: "Chrysler Neon",
		start_production: 1993,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dodge_SRT-4.jpg/400px-Dodge_SRT-4.jpg",
		title: "Dodge Neon SRT-4",
		start_production: 2003,
		class: "Sport Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Audi_Q7_timeline.jpg/400px-Audi_Q7_timeline.jpg",
		title: "Audi Q7",
		start_production: 2005,
		class: "Full-size luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsubishi_Raider_crew_cab.jpg/400px-Mitsubishi_Raider_crew_cab.jpg",
		title: "Mitsubishi Raider",
		start_production: 2005,
		class: "Mid-size pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Monza30E.jpg/400px-Monza30E.jpg",
		title: "Opel Monza",
		start_production: 1978,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lincoln_Mark_LT_long_bed.jpg/400px-Lincoln_Mark_LT_long_bed.jpg",
		title: "Lincoln Mark LT",
		start_production: 2005,
		class: "Full-size luxury pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Speedster_Turbo_1.JPG/400px-Speedster_Turbo_1.JPG",
		title: "Opel Speedster",
		start_production: 2000,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/1997-2000_Chevrolet_Venture_SWB_3-Door.jpg/400px-1997-2000_Chevrolet_Venture_SWB_3-Door.jpg",
		title: "Chevrolet Venture",
		start_production: 1996,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/1994-1996_Chevrolet_Lumina_APV.jpg/400px-1994-1996_Chevrolet_Lumina_APV.jpg",
		title: "Chevrolet Lumina APV",
		start_production: 1989,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Pontiac_Montana_LWB.jpg/400px-Pontiac_Montana_LWB.jpg",
		title: "Pontiac Montana",
		start_production: 1997,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chevrolet_Uplander_LWB.jpg/400px-Chevrolet_Uplander_LWB.jpg",
		title: "Chevrolet Uplander",
		start_production: 2005,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Buick_Terraza_--_09-26-2009.jpg/400px-Buick_Terraza_--_09-26-2009.jpg",
		title: "Buick Terraza",
		start_production: 2005,
		class: "Minivan",
	},
	{
		image: "",
		title: "Ɛ̃fini MS-8",
		start_production: 1992,
		class: "Luxury",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Autozam_Clef.JPG/400px-Autozam_Clef.JPG",
		title: "Autozam Clef",
		start_production: 1992,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mazda_Persona.jpg/400px-Mazda_Persona.jpg",
		title: "Mazda Persona",
		start_production: 1988,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Seat_Altea_front_20090919.jpg/400px-Seat_Altea_front_20090919.jpg",
		title: "SEAT Altea",
		start_production: 2004,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/1996_Rover_618_i_-_rear.jpg/400px-1996_Rover_618_i_-_rear.jpg",
		title: "Rover 600 Series",
		start_production: 1993,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/1982MercuryLynx.jpg/400px-1982MercuryLynx.jpg",
		title: "Mercury Lynx",
		start_production: 1980,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/9/91/89_Beretta_GT.jpg/400px-89_Beretta_GT.jpg",
		title: "Chevrolet Beretta",
		start_production: 1987,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Citro%C3%ABn_C6_front_20100327.jpg/400px-Citro%C3%ABn_C6_front_20100327.jpg",
		title: "Citroën C6",
		start_production: 2005,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Geo_Storm_--_-07-09-2009.jpg/400px-Geo_Storm_--_-07-09-2009.jpg",
		title: "Geo Storm",
		start_production: 1990,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/90-92_Geo_Prizm.jpg/400px-90-92_Geo_Prizm.jpg",
		title: "Geo Prizm",
		start_production: 1988,
		class: "Subcompact (1989–1992) Compact (1993–2002)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/68_Yenko_Camaro.jpg/400px-68_Yenko_Camaro.jpg",
		title: "Yenko Camaro",
		start_production: 1967,
		class: "pony car <BR> muscle car <BR> sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2009-2010_Ford_Territory_%28SY_II%29_TX_wagon_01.jpg/400px-2009-2010_Ford_Territory_%28SY_II%29_TX_wagon_01.jpg",
		title: "Ford Territory",
		start_production: 2004,
		class: "Mid-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2006-2009_Holden_WM_Statesman_sedan_01.jpg/400px-2006-2009_Holden_WM_Statesman_sedan_01.jpg",
		title: "Holden Caprice",
		start_production: 1990,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oldsmobile_Cutlass_Calais_--_08-28-2009.jpg/400px-Oldsmobile_Cutlass_Calais_--_08-28-2009.jpg",
		title: "Oldsmobile Cutlass Calais",
		start_production: 1984,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/00-02_Toyota_Echo_coupe.jpg/400px-00-02_Toyota_Echo_coupe.jpg",
		title: "Toyota Platz",
		start_production: 1999,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/1988_Buick_Reatta%2C_front_left.jpg/400px-1988_Buick_Reatta%2C_front_left.jpg",
		title: "Buick Reatta",
		start_production: 1988,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lotus_EXIGE_dutch_licence_registration_01-HXR-9_pic1.JPG/400px-Lotus_EXIGE_dutch_licence_registration_01-HXR-9_pic1.JPG",
		title: "Lotus Exige",
		start_production: 2000,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2016_Volvo_S90_Inscription_fr.jpg/400px-2016_Volvo_S90_Inscription_fr.jpg",
		title: "Volvo S90",
		start_production: 2016,
		class: "Executive car /",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Volvo_S70_--_02-29-2012.JPG/400px-Volvo_S70_--_02-29-2012.JPG",
		title: "Volvo S70",
		start_production: 1996,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Jeep_Grand_Wagoneer_001.JPG/400px-Jeep_Grand_Wagoneer_001.JPG",
		title: "Jeep Wagoneer (SJ)",
		start_production: 1962,
		class: "Full-size SUV (1963–1991)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pontiac_Torrent_--_08-28-2009.jpg/400px-Pontiac_Torrent_--_08-28-2009.jpg",
		title: "Pontiac Torrent",
		start_production: 2005,
		class: "Mid-size crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Isuzu-Ascender-7Pass.jpg/400px-Isuzu-Ascender-7Pass.jpg",
		title: "Isuzu Ascender",
		start_production: 2003,
		class: "mid-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/English_Ford_Puma.jpg/400px-English_Ford_Puma.jpg",
		title: "Ford Puma",
		start_production: 1997,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/1997_Oldsmobile_Achieva_SL.png/400px-1997_Oldsmobile_Achieva_SL.png",
		title: "Oldsmobile Achieva",
		start_production: 1991,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%2786_Shelby_GLHS_%28Orange_Julep_%2709%29.jpg/400px-%2786_Shelby_GLHS_%28Orange_Julep_%2709%29.jpg",
		title: "Shelby GLHS",
		start_production: 1986,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2009_Saturn_Sky_Redline_Ruby_Red_Limited_Edition.jpg/400px-2009_Saturn_Sky_Redline_Ruby_Red_Limited_Edition.jpg",
		title: "Saturn Sky",
		start_production: 2006,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/2006-2007_Volkswagen_New_Beetle.jpg/400px-2006-2007_Volkswagen_New_Beetle.jpg",
		title: "Volkswagen New Beetle",
		start_production: 1997,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/1976_AMC_Hornet_Sportabout.jpg/400px-1976_AMC_Hornet_Sportabout.jpg",
		title: "AMC Hornet",
		start_production: 1969,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Audi_V8Quattro.jpg/400px-Audi_V8Quattro.jpg",
		title: "Audi V8",
		start_production: 1988,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Recreational_Vehicle.JPG/400px-Recreational_Vehicle.JPG",
		title: "Dodge Ram Van",
		start_production: 1971,
		class: "Van",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fiat_Strada_Pick-Up.JPG/400px-Fiat_Strada_Pick-Up.JPG",
		title: "Fiat Strada",
		start_production: 1996,
		class: "Coupé utility",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Chevrolet_SSR.jpg/400px-Chevrolet_SSR.jpg",
		title: "Chevrolet SSR",
		start_production: 2003,
		class: "pickup",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Samand_LX_31.jpg/400px-Samand_LX_31.jpg",
		title: "IKCO Samand",
		start_production: 2003,
		class: "Small family carsedan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Renault_Modus_front_20080530.jpg/400px-Renault_Modus_front_20080530.jpg",
		title: "Renault Modus",
		start_production: 2004,
		class: "Mini MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Nissan-Titan-crewcab.jpg/400px-Nissan-Titan-crewcab.jpg",
		title: "Nissan Titan",
		class: "Full-size pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chevrolet_Cobalt_Coupe.jpg/400px-Chevrolet_Cobalt_Coupe.jpg",
		title: "Chevrolet Cobalt",
		start_production: 2004,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2007ChevroletHHR-001.jpg/400px-2007ChevroletHHR-001.jpg",
		title: "Chevrolet HHR",
		start_production: 2005,
		class: "Compact Car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Toyopet1500RK23.jpg/400px-Toyopet1500RK23.jpg",
		title: "Toyota Stout",
		start_production: 1954,
		class: "light truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2007-Saturn-Aura-XE.JPG/400px-2007-Saturn-Aura-XE.JPG",
		title: "Saturn Aura",
		start_production: 2006,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Saab_9-7X_--_03-19-2012.JPG/400px-Saab_9-7X_--_03-19-2012.JPG",
		title: "Saab 9-7X",
		start_production: 2005,
		class: "Mid-size luxury SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bentley_Continental_Flying_Spur_-_Flickr_-_Alexandre_Pr%C3%A9vot_%28cropped%29.jpg/400px-Bentley_Continental_Flying_Spur_-_Flickr_-_Alexandre_Pr%C3%A9vot_%28cropped%29.jpg",
		title: "Bentley Continental Flying Spur (2005)",
		start_production: 2005,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Fiat_Idea_front_20071102.jpg/400px-Fiat_Idea_front_20071102.jpg",
		title: "Fiat Idea",
		start_production: 2003,
		class: "Mini MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fiat_Marea_2420V_2003.jpg/400px-Fiat_Marea_2420V_2003.jpg",
		title: "Fiat Marea",
		start_production: 1996,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/1991_Nissan_Figaro_%28E-FK10%29_convertible_%2826452674766%29.jpg/400px-1991_Nissan_Figaro_%28E-FK10%29_convertible_%2826452674766%29.jpg",
		title: "Nissan Figaro",
		start_production: 1991,
		class: "City car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/06-07_Cadillac_DTS.jpg/400px-06-07_Cadillac_DTS.jpg",
		title: "Cadillac DTS",
		start_production: 2005,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Blue_Audi_RS6_C5_sedan_fl.jpg/400px-Blue_Audi_RS6_C5_sedan_fl.jpg",
		title: "Audi RS 6",
		class: "Mid-size luxury car, sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Cadillac_BLS_front.JPG/400px-Cadillac_BLS_front.JPG",
		title: "Cadillac BLS",
		start_production: 2005,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Buick_Invicta_Convertible_1961.jpg/400px-Buick_Invicta_Convertible_1961.jpg",
		title: "Buick Invicta",
		start_production: 1959,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Buick_Somerset.jpg/400px-Buick_Somerset.jpg",
		title: "Buick Somerset",
		start_production: 1985,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Thomas_Vista.jpg/400px-Thomas_Vista.jpg",
		title: "Thomas Vista",
		start_production: 1989,
		class: "Type C",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%22_12_-_ITALY_-_Alfa_Romeo_Brera_Milan_Design_Week_Superstudio.JPG/400px-%22_12_-_ITALY_-_Alfa_Romeo_Brera_Milan_Design_Week_Superstudio.JPG",
		title: "Alfa Romeo Brera and Spider",
		start_production: 2005,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Alfa_159_grey.jpg/400px-Alfa_159_grey.jpg",
		title: "Alfa Romeo 159",
		start_production: 2004,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/M%C3%A9hari_-_Flickr_-_besopha.jpg/400px-M%C3%A9hari_-_Flickr_-_besopha.jpg",
		title: "Citroën Méhari",
		start_production: 1968,
		class: "Off-road compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/1979_AMC_Spirit_GT_V8_Russet_FR.jpg/400px-1979_AMC_Spirit_GT_V8_Russet_FR.jpg",
		title: "AMC Spirit",
		start_production: 1979,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/2014_Audi_Q5_%288R_MY14%29_2.0_TDI_quattro_wagon_%282015-07-24%29_01.jpg/400px-2014_Audi_Q5_%288R_MY14%29_2.0_TDI_quattro_wagon_%282015-07-24%29_01.jpg",
		title: "Audi Q5",
		start_production: 2008,
		class: "Compact luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/1978_AMC_Concord_DL_4-door_sedan_beige.jpg/400px-1978_AMC_Concord_DL_4-door_sedan_beige.jpg",
		title: "AMC Concord",
		start_production: 1977,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Alfa_Romeo_145_001.JPG/400px-Alfa_Romeo_145_001.JPG",
		title: "Alfa Romeo 145 and 146",
		start_production: 1994,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2007_Hummer_H3_--_NHTSA.jpg/400px-2007_Hummer_H3_--_NHTSA.jpg",
		title: "Hummer H3",
		start_production: 2005,
		class: "{{ubl | Mid-size SUV | Pickup truck },},",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Schuppan_962CR.jpg/400px-Schuppan_962CR.jpg",
		title: "Schuppan 962CR",
		start_production: 1994,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Honda_Orthia.jpg/400px-Honda_Orthia.jpg",
		title: "Honda Orthia",
		start_production: 1996,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2008_Jeep_Compass_%28MK_MY08%29_Limited_2.4_wagon_%282015-11-11%29_01.jpg/400px-2008_Jeep_Compass_%28MK_MY08%29_Limited_2.4_wagon_%282015-11-11%29_01.jpg",
		title: "Jeep Compass",
		start_production: 2006,
		class: "Compact crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/LHS_1995-97.JPG/400px-LHS_1995-97.JPG",
		title: "Chrysler LHS",
		start_production: 1993,
		class: "Full-size luxury sedan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dodge_D100.jpg/400px-Dodge_D100.jpg",
		title: "Dodge D Series",
		start_production: 1961,
		class: "Full-size pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2008-10-05_Red_Plymouth_Prowler_at_South_Square.jpg/400px-2008-10-05_Red_Plymouth_Prowler_at_South_Square.jpg",
		title: "Plymouth Prowler",
		start_production: 1997,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/07-08_Chrysler_Pacifica.jpg/400px-07-08_Chrysler_Pacifica.jpg",
		title: "Chrysler Pacifica (CS)",
		start_production: 2003,
		class: "Mid-size crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mercedes-Benz_230_SL%2C_Bj._1964_%282009-05-01%29.jpg/400px-Mercedes-Benz_230_SL%2C_Bj._1964_%282009-05-01%29.jpg",
		title: "Mercedes-Benz W113",
		start_production: 1963,
		class: "Sports car, GT",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2003-2005_Infiniti_FX35.jpg/400px-2003-2005_Infiniti_FX35.jpg",
		title: "Infiniti QX70",
		start_production: 2002,
		class: "Mid-size luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/b/b6/FordEXP1982.jpg",
		title: "Ford EXP",
		start_production: 1981,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Daewoo_Espero_front_20071227.jpg/400px-Daewoo_Espero_front_20071227.jpg",
		title: "Daewoo Espero",
		start_production: 1990,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2001_Daewoo_Lanos_%28T150%29_Sport_3-door_hatchback_%282010-06-17%29_01.jpg/400px-2001_Daewoo_Lanos_%28T150%29_Sport_3-door_hatchback_%282010-06-17%29_01.jpg",
		title: "Daewoo Lanos",
		start_production: 1997,
		class: "Subcompact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2006-2011_Chevrolet_Captiva_LS_wagon_%282015-12-28%29_01.jpg/400px-2006-2011_Chevrolet_Captiva_LS_wagon_%282015-12-28%29_01.jpg",
		title: "Chevrolet Captiva",
		start_production: 2006,
		class: "Compact/mid-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Chevrolet_Celta_3dr_post-2006_-_Front.jpg/400px-Chevrolet_Celta_3dr_post-2006_-_Front.jpg",
		title: "Chevrolet Celta",
		start_production: 2000,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2006-2008_Mercedes-Benz_SL_350_%28R230%29_roadster_%282011-01-12%29_01.jpg/400px-2006-2008_Mercedes-Benz_SL_350_%28R230%29_roadster_%282011-01-12%29_01.jpg",
		title: "Mercedes-Benz SL-Class (R230)",
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2006-2008_Audi_RS_4_%288ED%29_quattro_Avant_%282011-09-03%29_01.jpg/400px-2006-2008_Audi_RS_4_%288ED%29_quattro_Avant_%282011-09-03%29_01.jpg",
		title: "Audi RS 4",
		class: "Compact executive Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/BMW-M-Coupe.jpg/400px-BMW-M-Coupe.jpg",
		title: "BMW M Coupe",
		start_production: 1998,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/BMW_Z3_M_-_Flickr_-_Alexandre_Pr%C3%A9vot_%28cropped%29.jpg/400px-BMW_Z3_M_-_Flickr_-_Alexandre_Pr%C3%A9vot_%28cropped%29.jpg",
		title: "BMW M Roadster",
		start_production: 1998,
		class: "Roadster Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg/400px-Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg",
		title: "Mercedes-Benz S-Class (W221)",
		start_production: 2005,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2008_Aston_Martin_V8_Vantage_Coupe_%282014-12-28%29.JPG/400px-2008_Aston_Martin_V8_Vantage_Coupe_%282014-12-28%29.JPG",
		title: "Aston Martin Vantage (2005)",
		start_production: 2005,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dodge_Caliber_--_09-07-2009.jpg/400px-Dodge_Caliber_--_09-07-2009.jpg",
		title: "Dodge Caliber",
		start_production: 2006,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Silver_Audi_S6_C7_fl_IAA_2011.jpg/400px-Silver_Audi_S6_C7_fl_IAA_2011.jpg",
		title: "Audi S6",
		class: "Mid-size luxury / Executive car Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Peugeot_4007_HDi_FAP_155_Platinum_%E2%80%93_Frontansicht%2C_15._Juni_2011%2C_W%C3%BClfrath.jpg/400px-Peugeot_4007_HDi_FAP_155_Platinum_%E2%80%93_Frontansicht%2C_15._Juni_2011%2C_W%C3%BClfrath.jpg",
		title: "Peugeot 4007",
		start_production: 2007,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2005-2006_Mitsubishi_380_%28DB%29_sedan_01.jpg/400px-2005-2006_Mitsubishi_380_%28DB%29_sedan_01.jpg",
		title: "Mitsubishi 380",
		start_production: 2005,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dodge_St_Regis-3.jpg/400px-Dodge_St_Regis-3.jpg",
		title: "Dodge St. Regis",
		start_production: 1979,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Seat_Inca.JPG/400px-Seat_Inca.JPG",
		title: "SEAT Inca",
		start_production: 1996,
		class: "Van/panel van",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Omega_av.jpg/400px-Omega_av.jpg",
		title: "Lotus Carlton",
		start_production: 1990,
		class: "Sports saloon",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Alfa_Romeo_Spider_2002.JPG/400px-Alfa_Romeo_Spider_2002.JPG",
		title: "Alfa Romeo GTV and Spider",
		start_production: 1993,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bentley_S1_%28Byward_Auto_Classic%29.jpg/400px-Bentley_S1_%28Byward_Auto_Classic%29.jpg",
		title: "Bentley S1",
		start_production: 1955,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Saturn_Outlook_--_03-24-2012.JPG/400px-Saturn_Outlook_--_03-24-2012.JPG",
		title: "Saturn Outlook",
		start_production: 2006,
		class: "Full-size crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/66Sat.jpg/400px-66Sat.jpg",
		title: "Plymouth Satellite",
		start_production: 1964,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Plymouth-acclaim.jpg/400px-Plymouth-acclaim.jpg",
		title: "Plymouth Acclaim",
		start_production: 1989,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2012_Toyota_Crown-Royal_01.jpg/400px-2012_Toyota_Crown-Royal_01.jpg",
		title: "Toyota Crown",
		start_production: 1955,
		class: "Mid-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Messerschmitt_KR175_01.jpg/400px-Messerschmitt_KR175_01.jpg",
		title: "Messerschmitt KR175",
		start_production: 1953,
		class: "Microcar",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2007-2011_Volkswagen_Eos_--_03-30-2011_2.jpg/400px-2007-2011_Volkswagen_Eos_--_03-30-2011_2.jpg",
		title: "Volkswagen Eos",
		start_production: 2006,
		class: "Sport compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Plymouth_GTX_%28%2710_Centropolis_Laval%29.jpg/400px-Plymouth_GTX_%28%2710_Centropolis_Laval%29.jpg",
		title: "Plymouth GTX",
		start_production: 1967,
		class: "Muscle car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lancia_Dedra_from_La_Spezia.jpg/400px-Lancia_Dedra_from_La_Spezia.jpg",
		title: "Lancia Dedra",
		start_production: 1989,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Opel_Antara_2.0_CDTI_front_20100516.jpg/400px-Opel_Antara_2.0_CDTI_front_20100516.jpg",
		title: "Opel Antara",
		start_production: 2006,
		class: "Compact crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/1986_Mustang_SVO_gray.jpg/400px-1986_Mustang_SVO_gray.jpg",
		title: "Ford Mustang SVO",
		start_production: 1984,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2000-2004_Hyundai_Trajet_%28FO%29_GLS_van_01.jpg/400px-2000-2004_Hyundai_Trajet_%28FO%29_GLS_van_01.jpg",
		title: "Hyundai Trajet",
		start_production: 1999,
		class: "Large MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Peugeot_207_RC_Facelift_front_20100416.jpg/400px-Peugeot_207_RC_Facelift_front_20100416.jpg",
		title: "Peugeot 207",
		start_production: 2006,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mitsubishi_i.jpg/400px-Mitsubishi_i.jpg",
		title: "Mitsubishi i",
		start_production: 2006,
		class: "Kei car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Citro%C3%ABn_C-Crosser_front_20100329.jpg/400px-Citro%C3%ABn_C-Crosser_front_20100329.jpg",
		title: "Citroën C-Crosser",
		start_production: 2007,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Dodge_Nitro_.jpg/400px-Dodge_Nitro_.jpg",
		title: "Dodge Nitro",
		start_production: 2006,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2004-2005_Mitsubishi_Endeavor_--_03-11-2011.jpg/400px-2004-2005_Mitsubishi_Endeavor_--_03-11-2011.jpg",
		title: "Mitsubishi Endeavor",
		start_production: 2002,
		class: "Mid-size crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Virginia_Overland_Bus_365_1988_IHC-Wayne-cropped.jpg/400px-Virginia_Overland_Bus_365_1988_IHC-Wayne-cropped.jpg",
		title: "Wayne Lifeguard",
		start_production: 1973,
		class: "Type C (Conventional)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ford_LTD_Crown_Victoria_sedan_1.jpg/400px-Ford_LTD_Crown_Victoria_sedan_1.jpg",
		title: "Ford LTD Crown Victoria",
		start_production: 1978,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/1968_AMC_Rebel_Station_Wagon-GoldWhite.jpg/400px-1968_AMC_Rebel_Station_Wagon-GoldWhite.jpg",
		title: "AMC Rebel",
		start_production: 1967,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dacia_Solenza_1.4_MPI_Confort.jpg/400px-Dacia_Solenza_1.4_MPI_Confort.jpg",
		title: "Dacia Solenza",
		start_production: 2003,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Saab_9-4X_--_04-08-2011.jpg/400px-Saab_9-4X_--_04-08-2011.jpg",
		title: "Saab 9-4X",
		start_production: 2011,
		class: "Compact luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Toyota_Innova_%28first_generation%29_%28front%29%2C_Kajang.jpg/400px-Toyota_Innova_%28first_generation%29_%28front%29%2C_Kajang.jpg",
		title: "Toyota Innova",
		start_production: 2004,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/06-08_Toyota_Yaris.jpg/400px-06-08_Toyota_Yaris.jpg",
		title: "Toyota Belta",
		start_production: 2005,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jeep_Patriot.jpg/400px-Jeep_Patriot.jpg",
		title: "Jeep Patriot",
		start_production: 2006,
		class: "Compact Crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Renault_Wind_Dynamique_TCe_100_front_20100904.jpg/400px-Renault_Wind_Dynamique_TCe_100_front_20100904.jpg",
		title: "Renault Wind",
		start_production: 2010,
		class: "Roadster",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/ChevroletCorvette_3.JPG/400px-ChevroletCorvette_3.JPG",
		title: "Chevrolet Corvette (C6)",
		start_production: 2004,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/1962_Rambler_American_Conv-Red.jpg/400px-1962_Rambler_American_Conv-Red.jpg",
		title: "Rambler American",
		start_production: 1958,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/2013_Lincoln_MKS_AWD_facelift%2C_front_view.jpg/400px-2013_Lincoln_MKS_AWD_facelift%2C_front_view.jpg",
		title: "Lincoln MKS",
		start_production: 2008,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Vento_TL.jpg/400px-Vento_TL.jpg",
		title: "Volkswagen Vento",
		start_production: 2010,
		class: "Subcompact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2014_AM_Rapide_S_front.jpg/400px-2014_AM_Rapide_S_front.jpg",
		title: "Aston Martin Rapide",
		start_production: 2010,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Fiat_Grande_Punto_20090906_front.JPG/400px-Fiat_Grande_Punto_20090906_front.JPG",
		title: "Fiat Grande Punto",
		start_production: 2005,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Jeep_Cherokee_SJ_Chief_S_f.jpg/400px-Jeep_Cherokee_SJ_Chief_S_f.jpg",
		title: "Jeep Cherokee (SJ)",
		start_production: 1974,
		class: "Full-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/%2785_Dodge_Charger_%28Centropolis_Laval_%2710%29.jpg/400px-%2785_Dodge_Charger_%28Centropolis_Laval_%2710%29.jpg",
		title: "Dodge Charger (L-body)",
		start_production: 1983,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/2015_Dodge_Charger_SRT_392_with_Scat_Pack.JPG/400px-2015_Dodge_Charger_SRT_392_with_Scat_Pack.JPG",
		title: "Dodge Charger (LX)",
		start_production: 2005,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Honda_Airwave.jpg/400px-Honda_Airwave.jpg",
		title: "Honda Airwave",
		start_production: 2005,
		class: "Subcompact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pontiac_Chieftain_1952_2.jpg/400px-Pontiac_Chieftain_1952_2.jpg",
		title: "Pontiac Chieftain",
		start_production: 1949,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Saturn_Relay.jpg/400px-Saturn_Relay.jpg",
		title: "Saturn Relay",
		start_production: 2005,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mazda_CX-9.JPG/400px-Mazda_CX-9.JPG",
		title: "Mazda CX-9",
		start_production: 2006,
		class: "Full-size (sometimes considered mid-size) crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/2007_Toyota_Aurion_Prodigy_06_%28edit_5%29.jpg/400px-2007_Toyota_Aurion_Prodigy_06_%28edit_5%29.jpg",
		title: "Toyota Aurion (XV40)",
		start_production: 2006,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/GKDEvolution.jpg/400px-GKDEvolution.jpg",
		title: "GKD Evolution",
		start_production: 2006,
		class: "Roadster coupe",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chevrolet_C5_Corvette_Convertible_%28Orange_Julep%29.jpg/400px-Chevrolet_C5_Corvette_Convertible_%28Orange_Julep%29.jpg",
		title: "Chevrolet Corvette (C5)",
		start_production: 1996,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/1984-Corvette-C4.jpg/400px-1984-Corvette-C4.jpg",
		title: "Chevrolet Corvette (C4)",
		start_production: 1983,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ford_S-Max_-_Mondial_de_l%27Automobile_de_Paris_2014_-_013.jpg/400px-Ford_S-Max_-_Mondial_de_l%27Automobile_de_Paris_2014_-_013.jpg",
		title: "Ford S-Max",
		start_production: 2006,
		class: "Large MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dodge_Ram_SRT-10.jpg/400px-Dodge_Ram_SRT-10.jpg",
		title: "Dodge Ram SRT-10",
		start_production: 2004,
		class: "Sport pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/07_STS_V.jpg/400px-07_STS_V.jpg",
		title: "Cadillac STS-V",
		start_production: 2006,
		class: "Mid-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2013_Alfa_Romeo_Giulietta_%28940_MY13%29_Distinctive_hatchback_%282015-07-09%29.jpg/400px-2013_Alfa_Romeo_Giulietta_%28940_MY13%29_Distinctive_hatchback_%282015-07-09%29.jpg",
		title: "Alfa Romeo Giulietta (940)",
		start_production: 2010,
		class: "Compact car / Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/1954_Hudson_Super_Wasp.jpg/400px-1954_Hudson_Super_Wasp.jpg",
		title: "Hudson Wasp",
		start_production: 1951,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Opel_Signum_Facelift_20090717_front.JPG/400px-Opel_Signum_Facelift_20090717_front.JPG",
		title: "Opel Signum",
		start_production: 2003,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/MB_190_SL_am_2006-07-16_%28ret_kl%29.JPG/400px-MB_190_SL_am_2006-07-16_%28ret_kl%29.JPG",
		title: "Mercedes-Benz 190 SL",
		start_production: 1955,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nissan_Be-1.JPG/400px-Nissan_Be-1.JPG",
		title: "Nissan Be-1",
		start_production: 1987,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flickr_-_DVS1mn_-_55_Chevrolet_150.jpg/400px-Flickr_-_DVS1mn_-_55_Chevrolet_150.jpg",
		title: "Chevrolet 150",
		start_production: 1953,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Miami_Dade_Police_-_Crown_Victoria.JPG/400px-Miami_Dade_Police_-_Crown_Victoria.JPG",
		title: "Ford Crown Victoria Police Interceptor",
		start_production: 1992,
		class: "Patrol car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Lancia_Kappa_SW_front_20150911.jpg/400px-Lancia_Kappa_SW_front_20150911.jpg",
		title: "Lancia Kappa",
		start_production: 1994,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Aston_Martin_DBS_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2811%29_%28cropped%29.jpg/400px-Aston_Martin_DBS_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2811%29_%28cropped%29.jpg",
		title: "Aston Martin DBS V12",
		start_production: 2007,
		class: "Grand tourer",
	},
	{
		image: "",
		title: "Škoda Roomster",
		start_production: 2006,
		class: "Leisure activity vehicle (Roomster) Panel van (Praktik)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Renault_Fluence_2.0_Authentique_2013_%2814634156231%29.jpg/400px-Renault_Fluence_2.0_Authentique_2013_%2814634156231%29.jpg",
		title: "Renault Fluence",
		start_production: 2009,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1985_Mitsubishi_Cordia_%28AB%29_GSL_hatchback_%282009-09-17%29.jpg/400px-1985_Mitsubishi_Cordia_%28AB%29_GSL_hatchback_%282009-09-17%29.jpg",
		title: "Mitsubishi Cordia",
		start_production: 1982,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Renault_Talisman.jpg/400px-Renault_Talisman.jpg",
		title: "Renault Talisman",
		start_production: 2015,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BMW_303_1933_bicolor_vr_TCE.jpg/400px-BMW_303_1933_bicolor_vr_TCE.jpg",
		title: "BMW 303",
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2005_Holden_Commodore_%28VZ%29_SV6_sedan_%282015-08-07%29_01.jpg/400px-2005_Holden_Commodore_%28VZ%29_SV6_sedan_%282015-08-07%29_01.jpg",
		title: "Holden Commodore (VZ)",
		start_production: 2004,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/66marlinFastback_wet_hood_ornament.jpg/400px-66marlinFastback_wet_hood_ornament.jpg",
		title: "Rambler Marlin",
		start_production: 1965,
		class: "Personal luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/%22_15_-_ITALY_-_Fiat_500_restyling_in_Sempione_Park_%28Sforzesco_Castle%29_in_Milan_-_world_premier_2015_Hatchbacks_purple_lounge_and_white_sport_05.jpg/400px-%22_15_-_ITALY_-_Fiat_500_restyling_in_Sempione_Park_%28Sforzesco_Castle%29_in_Milan_-_world_premier_2015_Hatchbacks_purple_lounge_and_white_sport_05.jpg",
		title: "Fiat 500 (2007)",
		start_production: 2007,
		class: "City car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Piaggio_Vespacar_APE_P400V_MPF.dsc01304.jpg/400px-Piaggio_Vespacar_APE_P400V_MPF.dsc01304.jpg",
		title: "Piaggio Ape",
		start_production: 1948,
		class: "Submicro Van",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hyundai_Mighty_as_schoolbus.jpg/400px-Hyundai_Mighty_as_schoolbus.jpg",
		title: "Hyundai Mighty",
		class: "Rear wheel drive vehicles",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2009_Volkswagen_Tiguan_%285N_MY10%29_125TSI_4MOTION_wagon_%282015-07-24%29_01.jpg/400px-2009_Volkswagen_Tiguan_%285N_MY10%29_125TSI_4MOTION_wagon_%282015-07-24%29_01.jpg",
		title: "Volkswagen Tiguan",
		start_production: 2007,
		class: "Compact crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/2009_Holden_Calais_%28VE_MY09.5%29_V_sedan_%282015-07-03%29_01.jpg/400px-2009_Holden_Calais_%28VE_MY09.5%29_V_sedan_%282015-07-03%29_01.jpg",
		title: "Holden Commodore (VE)",
		start_production: 2006,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2003_Holden_Commodore_%28VY_II%29_25th_Anniversary_sedan_%282016-01-04%29_01.jpg/400px-2003_Holden_Commodore_%28VY_II%29_25th_Anniversary_sedan_%282016-01-04%29_01.jpg",
		title: "Holden Commodore (VY)",
		start_production: 2002,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/1968_Beaumont_Coupe_%28Orange_Julep%29.jpg/400px-1968_Beaumont_Coupe_%28Orange_Julep%29.jpg",
		title: "Beaumont (automobile)",
		start_production: 1966,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/VW_Derby_CL_front.jpg/400px-VW_Derby_CL_front.jpg",
		title: "Volkswagen Derby",
		start_production: 1977,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Suzuki_APV_%28first_generation%29_%28front%29%2C_Serdang.jpg/400px-Suzuki_APV_%28first_generation%29_%28front%29%2C_Serdang.jpg",
		title: "Suzuki APV",
		start_production: 2004,
		class: "Mini MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2006-2008_Holden_WM_Caprice_sedan_02.jpg/400px-2006-2008_Holden_WM_Caprice_sedan_02.jpg",
		title: "Holden Caprice (WM)",
		start_production: 2006,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/1979_Holden_VB_Commodore_Sedan_%2822623854399%29.jpg/400px-1979_Holden_VB_Commodore_Sedan_%2822623854399%29.jpg",
		title: "Holden Commodore (VB)",
		start_production: 1978,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Audi_Q3_2.0_TFSI_quattro_S_tronic_Amalfiwei%C3%9F.JPG/400px-Audi_Q3_2.0_TFSI_quattro_S_tronic_Amalfiwei%C3%9F.JPG",
		title: "Audi Q3",
		start_production: 2011,
		class: "Compact crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/VW_Polo_IV_front_20080215.jpg/400px-VW_Polo_IV_front_20080215.jpg",
		title: "Volkswagen Polo Mk4",
		start_production: 2001,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/VW_Polo_front_20090329.jpg/400px-VW_Polo_front_20090329.jpg",
		title: "Volkswagen Polo Mk3",
		start_production: 1994,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Polo_2_a_v_sst.jpg/400px-Polo_2_a_v_sst.jpg",
		title: "Volkswagen Polo Mk2",
		start_production: 1981,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/VW_Crafter_2.0_TDI_Facelift.JPG/400px-VW_Crafter_2.0_TDI_Facelift.JPG",
		title: "Volkswagen Crafter",
		start_production: 2006,
		class: "Light commercial vehicle - van",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1983_Holden_Commodore_%28VH%29_SL_sedan_%2824203476572%29.jpg/400px-1983_Holden_Commodore_%28VH%29_SL_sedan_%2824203476572%29.jpg",
		title: "Holden Commodore (VH)",
		start_production: 1981,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/1989_Holden_Commodore_%28VN%29_Executive_sedan_%282015-07-03%29_01.jpg/400px-1989_Holden_Commodore_%28VN%29_Executive_sedan_%282015-07-03%29_01.jpg",
		title: "Holden Commodore (VN)",
		start_production: 1988,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ford_XB_Falcon_Hardtop_John_Goss_Special.jpg/400px-Ford_XB_Falcon_Hardtop_John_Goss_Special.jpg",
		title: "John Goss Special",
		start_production: 1975,
		class: "Muscle car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Fiat_Linea_Emotion_Fire_1.4_Petrol.jpg/400px-Fiat_Linea_Emotion_Fire_1.4_Petrol.jpg",
		title: "Fiat Linea",
		start_production: 2007,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ford_Cobra_no.66.jpg/400px-Ford_Cobra_no.66.jpg",
		title: "Ford Falcon Cobra",
		start_production: 1978,
		class: "Muscle car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rothmans_%27HDT%27_Holden_VL_Commodore_Group_A_SS.jpg/400px-Rothmans_%27HDT%27_Holden_VL_Commodore_Group_A_SS.jpg",
		title: "Holden Commodore (VL)",
		start_production: 1986,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nissan_Lafesta_003.JPG/400px-Nissan_Lafesta_003.JPG",
		title: "Nissan Lafesta",
		start_production: 2004,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/River-Ride_-_Budapest.JPG/400px-River-Ride_-_Budapest.JPG",
		title: "AmphiCoach GTS-1",
		start_production: 2006,
		class: "Amphibious motorcoach",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/1992_Holden_Commodore_%28VP%29_Executive_%282007-02-24%29_01.jpg/400px-1992_Holden_Commodore_%28VP%29_Executive_%282007-02-24%29_01.jpg",
		title: "Holden Commodore (VP)",
		start_production: 1991,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pontiac_G8_V6_--_02-04-2012_2.jpg/400px-Pontiac_G8_V6_--_02-04-2012_2.jpg",
		title: "Pontiac G8",
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2013_Jaguar_XF_%28X250_MY13%29_Premium_Luxury_sedan_%282015-08-07%29_01.jpg/400px-2013_Jaguar_XF_%28X250_MY13%29_Premium_Luxury_sedan_%282015-08-07%29_01.jpg",
		title: "Jaguar XF",
		start_production: 2007,
		class: "Mid-size luxury / Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2014_Audi_A1_%288X_MY14%29_1.4_TFSI_Attraction_Sportback_5-door_hatchback_%282015-07-09%29_01.jpg/400px-2014_Audi_A1_%288X_MY14%29_1.4_TFSI_Attraction_Sportback_5-door_hatchback_%282015-07-09%29_01.jpg",
		title: "Audi A1",
		start_production: 2010,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2004-2005_Ford_Falcon_%28BA_II%29_XR8_sedan_%282007-02-14%29.jpg/300px-2004-2005_Ford_Falcon_%28BA_II%29_XR8_sedan_%282007-02-14%29.jpg",
		title: "Ford Falcon (BA)",
		start_production: 2002,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/1996-1998_Volkswagen_Golf_%281H%29_CL_5-door_hatchback_03.jpg/400px-1996-1998_Volkswagen_Golf_%281H%29_CL_5-door_hatchback_03.jpg",
		title: "Volkswagen Golf Mk3",
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2004-2008_Volkswagen_Golf_%281K%29_Comfortline_5-door_hatchback_01.jpg/400px-2004-2008_Volkswagen_Golf_%281K%29_Comfortline_5-door_hatchback_01.jpg",
		title: "Volkswagen Golf Mk5",
		start_production: 2003,
		class: "Small family car (Golf) Compact MPV (Golf Plus)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/VW_Golf_IV_front_20071205.jpg/400px-VW_Golf_IV_front_20071205.jpg",
		title: "Volkswagen Golf Mk4",
		start_production: 1997,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/VW_Golf_I_Facelift_front_20081209.jpg/400px-VW_Golf_I_Facelift_front_20081209.jpg",
		title: "Volkswagen Golf Mk1",
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/DaciaSuperNovabyAlofok2.JPG/400px-DaciaSuperNovabyAlofok2.JPG",
		title: "Dacia SupeRNova",
		start_production: 2000,
		class: "Subcompact / Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/1956_Chevrolet_210_4-Door_Sedan_JCM211.jpg/400px-1956_Chevrolet_210_4-Door_Sedan_JCM211.jpg",
		title: "Chevrolet 210",
		start_production: 1953,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2010ChevroletCamaro-05-1.jpg/400px-2010ChevroletCamaro-05-1.jpg",
		title: "Chevrolet Camaro (fifth generation)",
		start_production: 2009,
		class: "Pony car Muscle car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/1993ChevroletCamaroZ28-001.jpg/400px-1993ChevroletCamaroZ28-001.jpg",
		title: "Chevrolet Camaro (fourth generation)",
		start_production: 1993,
		class: "{{ubl|Pony car|Sports car|Muscle car},},",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Chevrolet.camaro.IROC-Z-red.front.view-sstvwf.JPG/400px-Chevrolet.camaro.IROC-Z-red.front.view-sstvwf.JPG",
		title: "Chevrolet Camaro (third generation)",
		class: "{{ubl|Pony car|Muscle car},},",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/1997-1999_Holden_VT_Commodore_SS_sedan_03.jpg/400px-1997-1999_Holden_VT_Commodore_SS_sedan_03.jpg",
		title: "Holden Commodore (VT)",
		start_production: 1997,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/1970_camaro_z28.jpg/400px-1970_camaro_z28.jpg",
		title: "Chevrolet Camaro (second generation)",
		start_production: 1970,
		class: "Pony car Muscle car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2001_Ford_Fairmont_%28AU_III%29_sedan_%2823230030334%29.jpg/400px-2001_Ford_Fairmont_%28AU_III%29_sedan_%2823230030334%29.jpg",
		title: "Ford Falcon (AU)",
		start_production: 1998,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/1994_Holden_VR_Commodore_Engine_Bay.jpg/400px-1994_Holden_VR_Commodore_Engine_Bay.jpg",
		title: "Holden Commodore (VR)",
		start_production: 1993,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/1996_Holden_Commodore_%28VS%29_Equipe_sedan_%282015-07-15%29_01.jpg/400px-1996_Holden_Commodore_%28VS%29_Equipe_sedan_%282015-07-15%29_01.jpg",
		title: "Holden Commodore (VS)",
		start_production: 1995,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2000-2001_Holden_VX_Commodore_S_sedan_01.jpg/400px-2000-2001_Holden_VX_Commodore_S_sedan_01.jpg",
		title: "Holden Commodore (VX)",
		start_production: 2000,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/DCA_06_2012_Chevy_Volt_4035.JPG/400px-DCA_06_2012_Chevy_Volt_4035.JPG",
		title: "Chevrolet Volt",
		start_production: 2010,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Chevrolet_Camaro_RS_327_1968.jpg/400px-Chevrolet_Camaro_RS_327_1968.jpg",
		title: "Chevrolet Camaro (first generation)",
		start_production: 1966,
		class: "{{unbulleted list|Pony car|Muscle car},},",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/1997_Ford_Falcon_%28EL%29_GLi_sedan_%2817670566466%29.jpg/400px-1997_Ford_Falcon_%28EL%29_GLi_sedan_%2817670566466%29.jpg",
		title: "Ford Falcon (EL)",
		start_production: 1996,
		class: "Full-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Nissan_GT-R_01.JPG/400px-Nissan_GT-R_01.JPG",
		title: "Nissan GT-R",
		start_production: 2007,
		class: "Supercar",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Alfa_Romeo_MiTo_1.3_JTDm.JPG/400px-Alfa_Romeo_MiTo_1.3_JTDm.JPG",
		title: "Alfa Romeo MiTo",
		start_production: 2008,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hafei_Lobo.jpg/400px-Hafei_Lobo.jpg",
		title: "Hafei Lobo",
		start_production: 2002,
		class: "City car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ford_GPA-001.jpg/400px-Ford_GPA-001.jpg",
		title: "Ford GPA",
		class: "Amphibious military utility vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/GAZ_46_at_Sinsheim_pic2.JPG/400px-GAZ_46_at_Sinsheim_pic2.JPG",
		title: "GAZ 46",
		start_production: 1954,
		class: "4x4 amphibious jeep",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2013_Ford_Flex_--_07-11-2012.JPG/400px-2013_Ford_Flex_--_07-11-2012.JPG",
		title: "Ford Flex",
		class: "Full-size Crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Honda_Mobilio_Spike_2002.jpg/400px-Honda_Mobilio_Spike_2002.jpg",
		title: "Honda Mobilio Spike",
		start_production: 2002,
		class: "Mini MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/M520.jpg/400px-M520.jpg",
		title: "M520 Goer",
		start_production: 1972,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/2009_Volkswagen_Routan_SE.jpg/400px-2009_Volkswagen_Routan_SE.jpg",
		title: "Volkswagen Routan",
		start_production: 2008,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/GKDEvolution.jpg/400px-GKDEvolution.jpg",
		title: "GKD sports cars",
		start_production: 2006,
		class: "Roadster coupe",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Volvo-850.jpg/400px-Volvo-850.jpg",
		title: "Volvo 850",
		start_production: 1991,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2009_Dodge_Journey.jpg/400px-2009_Dodge_Journey.jpg",
		title: "Dodge Journey",
		start_production: 2008,
		class: "Mid-size crossover sport utility vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2000_Dodge_Intrepid_ES.jpg/400px-2000_Dodge_Intrepid_ES.jpg",
		title: "Dodge Intrepid",
		start_production: 1992,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/2012_Hyundai_Veloster_--_01-20-2012_2.jpg/400px-2012_Hyundai_Veloster_--_01-20-2012_2.jpg",
		title: "Hyundai Veloster",
		start_production: 2011,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2008_Infiniti_EX35_--_NHTSA.jpg/400px-2008_Infiniti_EX35_--_NHTSA.jpg",
		title: "Infiniti QX50",
		start_production: 2007,
		class: "Compact luxury crossover SUV (European: J-segment)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2013_Nissan_370Z_%28Z34_MY13.5%29_coupe_%282015-06-18%29_01.jpg/400px-2013_Nissan_370Z_%28Z34_MY13.5%29_coupe_%282015-06-18%29_01.jpg",
		title: "Nissan 370Z",
		start_production: 2009,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/1947_Toyopet_Model_SA_01.jpg/400px-1947_Toyopet_Model_SA_01.jpg",
		title: "Toyota SA",
		start_production: 1947,
		class: "large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Goggomobile_Dart.JPG/400px-Goggomobile_Dart.JPG",
		title: "Goggomobil Dart",
		start_production: 1959,
		class: "microcar",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Peugeot408EW10A13White.JPG/400px-Peugeot408EW10A13White.JPG",
		title: "Peugeot 408",
		start_production: 2010,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nissan_Sunny_N17_China_2012-04-15.JPG/400px-Nissan_Sunny_N17_China_2012-04-15.JPG",
		title: "Nissan Latio",
		start_production: 2011,
		class: "Subcompact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Seat_Tribu.jpg/400px-Seat_Tribu.jpg",
		title: "SEAT Tribu",
		start_production: 2007,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/1997Nissan200sxse.jpg/400px-1997Nissan200sxse.jpg",
		title: "Nissan Lucino",
		start_production: 1994,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2010_Hyundai_Genesis_Coupe_3_--_08-28-2009.jpg/400px-2010_Hyundai_Genesis_Coupe_3_--_08-28-2009.jpg",
		title: "Hyundai Genesis Coupe",
		start_production: 2008,
		class: "Sports Car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Peugeot_208_1.6_VTi_Allure_2014_%2815700189288%29.jpg/400px-Peugeot_208_1.6_VTi_Allure_2014_%2815700189288%29.jpg",
		title: "Peugeot 208",
		start_production: 2012,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/VW_white_up%21_1.0_%E2%80%93_Frontansicht%2C_14._April_2012%2C_Velbert.jpg/400px-VW_white_up%21_1.0_%E2%80%93_Frontansicht%2C_14._April_2012%2C_Velbert.jpg",
		title: "Volkswagen Up",
		start_production: 2011,
		class: "City car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Volkswagen_CC_2.0_TDI_BlueMotion_Technology_%28Facelift%29_%E2%80%93_Frontansicht%2C_24._Juni_2012%2C_Ratingen.jpg/400px-Volkswagen_CC_2.0_TDI_BlueMotion_Technology_%28Facelift%29_%E2%80%93_Frontansicht%2C_24._Juni_2012%2C_Ratingen.jpg",
		title: "Volkswagen CC",
		start_production: 2008,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2010_GMC_Terrain_SLT_--_05-06-2011.jpg/400px-2010_GMC_Terrain_SLT_--_05-06-2011.jpg",
		title: "GMC Terrain",
		class: "Mid-size crossover utility vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2009_Suzuki_Equator_extended_cab_Premium.jpg/400px-2009_Suzuki_Equator_extended_cab_Premium.jpg",
		title: "Suzuki Equator",
		start_production: 2008,
		class: "Mid-size pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2011_Toyota_Venza_--_NHTSA_2.jpg/400px-2011_Toyota_Venza_--_NHTSA_2.jpg",
		title: "Toyota Venza",
		start_production: 2008,
		class: "Mid-size crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2010_Lincoln_MKT_--_NHTSA_1.jpg/400px-2010_Lincoln_MKT_--_NHTSA_1.jpg",
		title: "Lincoln MKT",
		class: "Full-size luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gillig25.jpg/400px-Gillig25.jpg",
		title: "Gillig Transit Coach School Bus",
		start_production: 1940,
		class: "Type D (transit-style)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/AudiS_five.jpg/400px-AudiS_five.jpg",
		title: "Audi S5",
		start_production: 2007,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chevrolet_Thriftmaster.jpg/400px-Chevrolet_Thriftmaster.jpg",
		title: "Chevrolet Advance Design",
		start_production: 1947,
		class: "Pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Camionette_Chevrolet.jpg/400px-Camionette_Chevrolet.jpg",
		title: "Chevrolet Task Force",
		start_production: 1955,
		class: "Pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/94-98_Ford_Mustang_coupe.jpg/400px-94-98_Ford_Mustang_coupe.jpg",
		title: "Ford Mustang (fourth generation)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ford_Mustang_Ghia_1.jpg/400px-Ford_Mustang_Ghia_1.jpg",
		title: "Ford Mustang (third generation)",
		start_production: 1978,
		class: "Pony car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2013_Mercedes-Benz_SL_550_vf.jpg/400px-2013_Mercedes-Benz_SL_550_vf.jpg",
		title: "Mercedes-Benz SL-Class (R231)",
		start_production: 2012,
		class: "Sports car, Roadster",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Volkswagen_lavida_pg0_front_2009.JPG/400px-Volkswagen_lavida_pg0_front_2009.JPG",
		title: "Volkswagen Lavida",
		start_production: 2008,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Polo_2_G40_Front.jpg/400px-Polo_2_G40_Front.jpg",
		title: "Volkswagen Polo G40",
		start_production: 1986,
		class: "supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Samoch%C3%B3d_p%C5%82ywaj%C4%85cy_BAW.jpg/400px-Samoch%C3%B3d_p%C5%82ywaj%C4%85cy_BAW.jpg",
		title: "BAV 485",
		start_production: 1952,
		class: "6x6 amphibious transport",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2011_Blue_Bird_Vision.jpg/400px-2011_Blue_Bird_Vision.jpg",
		title: "Blue Bird Vision",
		start_production: 2003,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2011_Peugeot_508_Allure_HDi_sedan_%282015-07-24%29_01.jpg/400px-2011_Peugeot_508_Allure_HDi_sedan_%282015-07-24%29_01.jpg",
		title: "Peugeot 508",
		start_production: 2011,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/1997-2000_Toyota_Corolla_Levin_%28AE111%29_BZ-R_coupe_01.jpg/400px-1997-2000_Toyota_Corolla_Levin_%28AE111%29_BZ-R_coupe_01.jpg",
		title: "Toyota Corolla (E110)",
		start_production: 1995,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dacia_Duster_1.5_dCi_front_20100928.jpg/400px-Dacia_Duster_1.5_dCi_front_20100928.jpg",
		title: "Dacia Duster",
		start_production: 2009,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/SEAT_Exeo_%2822878336791%29.jpg/400px-SEAT_Exeo_%2822878336791%29.jpg",
		title: "SEAT Exeo",
		start_production: 2008,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/1st_Ford_Taurus_--_08-28-2009.jpg/400px-1st_Ford_Taurus_--_08-28-2009.jpg",
		title: "Ford Taurus (first generation)",
		start_production: 1985,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ford_Taurus_--_07-09-2009.jpg/400px-Ford_Taurus_--_07-09-2009.jpg",
		title: "Ford Taurus (second generation)",
		start_production: 1991,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/VW_T5_PanAmericana_Facelift.JPG/400px-VW_T5_PanAmericana_Facelift.JPG",
		title: "Volkswagen Transporter (T5)",
		start_production: 2003,
		class: "Light commercial vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/3rd_Ford_Taurus_sedan_rear.jpg/400px-3rd_Ford_Taurus_sedan_rear.jpg",
		title: "Ford Taurus (third generation)",
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/05-07_Ford_Taurus_SE_sedan.jpg/400px-05-07_Ford_Taurus_SE_sedan.jpg",
		title: "Ford Taurus (fourth generation)",
		start_production: 1999,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/2010_Ford_Taurus_Limited_1_--_10-31-2009.jpg/400px-2010_Ford_Taurus_Limited_1_--_10-31-2009.jpg",
		title: "Ford Taurus (sixth generation)",
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/2008_Ford_Taurus_SEL_.jpg/400px-2008_Ford_Taurus_SEL_.jpg",
		title: "Ford Taurus (fifth generation)",
		start_production: 2007,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2010_Volkswagen_Golf_%285K_MY11%29_77TSI_5-door_hatchback_%282015-07-03%29_01.jpg/400px-2010_Volkswagen_Golf_%285K_MY11%29_77TSI_5-door_hatchback_%282015-07-03%29_01.jpg",
		title: "Volkswagen Golf Mk6",
		start_production: 2008,
		class:
			"Compact North America Small family car British acceptation C-segment Europe",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Peugeot_2008_82_VTi_Access_%E2%80%93_Frontansicht%2C_28._Mai_2014%2C_D%C3%BCsseldorf.jpg/400px-Peugeot_2008_82_VTi_Access_%E2%80%93_Frontansicht%2C_28._Mai_2014%2C_D%C3%BCsseldorf.jpg",
		title: "Peugeot 2008",
		start_production: 2013,
		class: "Mini crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Peugeot_3008_Business-Line_%28Facelift%29_%E2%80%93_Frontansicht%2C_30._November_2014%2C_D%C3%BCsseldorf.jpg/400px-Peugeot_3008_Business-Line_%28Facelift%29_%E2%80%93_Frontansicht%2C_30._November_2014%2C_D%C3%BCsseldorf.jpg",
		title: "Peugeot 3008",
		start_production: 2008,
		class: "Compact crossover",
	},
	{
		image: "",
		title: "Škoda Yeti",
		start_production: 2009,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chevrolet_Orlando_LTZ_2.0_D_%E2%80%93_Frontansicht%2C_16._April_2011%2C_D%C3%BCsseldorf.jpg/400px-Chevrolet_Orlando_LTZ_2.0_D_%E2%80%93_Frontansicht%2C_16._April_2011%2C_D%C3%BCsseldorf.jpg",
		title: "Chevrolet Orlando",
		start_production: 2011,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Renault_Celtaquatre4.JPG/400px-Renault_Celtaquatre4.JPG",
		title: "Renault Celtaquatre",
		start_production: 1934,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2007_Toyota_Mark-X-Zio_01.jpg/400px-2007_Toyota_Mark-X-Zio_01.jpg",
		title: "Toyota Mark X ZiO",
		start_production: 2007,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Pontiac_Firebird_Trans_Am_%28Auto_classique_Bellepros_Vaudreuil-Dorion_%2711%29.JPG/400px-Pontiac_Firebird_Trans_Am_%28Auto_classique_Bellepros_Vaudreuil-Dorion_%2711%29.JPG",
		title: "Pontiac Firebird (third generation)",
		start_production: 1982,
		class: "Pony car Muscle car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mazda_Biante_01.JPG/400px-Mazda_Biante_01.JPG",
		title: "Mazda Biante",
		start_production: 2008,
		class: "MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tiba_Kermanshah.jpg/400px-Tiba_Kermanshah.jpg",
		title: "Saipa Tiba",
		start_production: 2009,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Lexus-HS250h_Tungsten_Pearl.jpg/400px-Lexus-HS250h_Tungsten_Pearl.jpg",
		title: "Lexus HS",
		start_production: 2009,
		class: "Compact executive car hybrid",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2014_Cadillac_ELR_trimmed.jpg/400px-2014_Cadillac_ELR_trimmed.jpg",
		title: "Cadillac ELR",
		start_production: 2013,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bravo_2.JPG/400px-Bravo_2.JPG",
		title: "Fiat Bravo (2007)",
		start_production: 2007,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2011_Audi_A7_%284G%29_3.0_TDI_quattro_hatchback_%282015-06-27%29_01.jpg/400px-2011_Audi_A7_%284G%29_3.0_TDI_quattro_hatchback_%282015-06-27%29_01.jpg",
		title: "Audi A7",
		start_production: 2010,
		class: "Mid-size luxury / Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/2015-03-03_Geneva_Motor_Show_3858.JPG/400px-2015-03-03_Geneva_Motor_Show_3858.JPG",
		title: "DS 5",
		start_production: 2011,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/2011_Nissan_Juke_SL_--_11-10-2011.jpg/400px-2011_Nissan_Juke_SL_--_11-10-2011.jpg",
		title: "Nissan Juke",
		start_production: 2010,
		class: "Mini SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2013_Proton_Exora_Bold_1.6_Premium_CFE_in_Cyberjaya%2C_Malaysia_%2803%29.jpg/400px-2013_Proton_Exora_Bold_1.6_Premium_CFE_in_Cyberjaya%2C_Malaysia_%2803%29.jpg",
		title: "Proton Exora",
		start_production: 2009,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/c/ca/Legend_left.jpg",
		title: "GKD Legend",
		start_production: 2008,
		class: "Roadster",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/VW_Polo_1.2_TDI_BlueMotion_%28V%29_%E2%80%93_Frontansicht%2C_7._M%C3%A4rz_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Polo_1.2_TDI_BlueMotion_%28V%29_%E2%80%93_Frontansicht%2C_7._M%C3%A4rz_2011%2C_D%C3%BCsseldorf.jpg",
		title: "Volkswagen Polo Mk5",
		start_production: 2009,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Runna.JPG/400px-Runna.JPG",
		title: "IKCO Runna",
		start_production: 2010,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/BlueBirdTC2000schoolbus.jpg/400px-BlueBirdTC2000schoolbus.jpg",
		title: "Blue Bird TC/2000",
		start_production: 1988,
		class: "Type D (transit-style)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mercedes-Benz_370S_1931.jpg/400px-Mercedes-Benz_370S_1931.jpg",
		title: "Mercedes-Benz W10",
		start_production: 1929,
		class: "Touring car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Thunderbird_1980.JPG/400px-Thunderbird_1980.JPG",
		title: "Ford Thunderbird (eighth generation)",
		start_production: 1979,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ford_Thunderbird_1983-1987_Aero_Bird-1.jpg/400px-Ford_Thunderbird_1983-1987_Aero_Bird-1.jpg",
		title: "Ford Thunderbird (ninth generation)",
		start_production: 1982,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/1989-1995_Ford_Thunderbird.jpg/400px-1989-1995_Ford_Thunderbird.jpg",
		title: "Ford Thunderbird (tenth generation)",
		start_production: 1988,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/2002-2005_Ford_Thunderbird.jpg/400px-2002-2005_Ford_Thunderbird.jpg",
		title: "Ford Thunderbird (eleventh generation)",
		start_production: 2000,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Peugeot_5008_front-1_20100501.jpg/400px-Peugeot_5008_front-1_20100501.jpg",
		title: "Peugeot 5008",
		start_production: 2009,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/1952_Chevrolet_Deluxe_%2815375972362%29.jpg/400px-1952_Chevrolet_Deluxe_%2815375972362%29.jpg",
		title: "Chevrolet Deluxe",
		start_production: 1941,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cadillac_XTS_01_China_2014-04-14.jpg/400px-Cadillac_XTS_01_China_2014-04-14.jpg",
		title: "Cadillac XTS",
		start_production: 2012,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2006_Toyota_Camry_%28ACV40R%29_Altise_01.jpg/400px-2006_Toyota_Camry_%28ACV40R%29_Altise_01.jpg",
		title: "Toyota Camry (XV40)",
		start_production: 2006,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2011_Nissan_Leaf_SL_--_10-28-2011.jpg/400px-2011_Nissan_Leaf_SL_--_10-28-2011.jpg",
		title: "Nissan Leaf",
		start_production: 2010,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Cadillac_ATS_2.0_Turbo_AWD_Premium_%E2%80%93_Frontansicht%2C_16._Oktober_2015%2C_D%C3%BCsseldorf.jpg/400px-Cadillac_ATS_2.0_Turbo_AWD_Premium_%E2%80%93_Frontansicht%2C_16._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
		title: "Cadillac ATS",
		start_production: 2012,
		class: "Compact luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Thomas-minotour-school-bus.jpg/400px-Thomas-minotour-school-bus.jpg",
		title: "Thomas Minotour",
		start_production: 1980,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Largemarge.jpg/400px-Largemarge.jpg",
		title: "Blue Bird Wanderlodge",
		start_production: 1963,
		class: "Class A",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Luxgen7_2.2_MPV_front_view.jpg/400px-Luxgen7_2.2_MPV_front_view.jpg",
		title: "Luxgen M7",
		start_production: 2009,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Volvo_V60_D5_Summum_%28Facelift%29_%E2%80%93_Frontansicht%2C_12._August_2013%2C_D%C3%BCsseldorf.jpg/400px-Volvo_V60_D5_Summum_%28Facelift%29_%E2%80%93_Frontansicht%2C_12._August_2013%2C_D%C3%BCsseldorf.jpg",
		title: "Volvo V60",
		start_production: 2010,
		class: "Large family estate/crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2002-04_Toyota_Camry_SE.jpg/400px-2002-04_Toyota_Camry_SE.jpg",
		title: "Toyota Camry (XV30)",
		start_production: 2001,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2009_Toyota_SAI_03.jpg/400px-2009_Toyota_SAI_03.jpg",
		title: "Toyota Sai",
		start_production: 2009,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Gillig_Phantom_School_Bus_LAUSD.jpg/400px-Gillig_Phantom_School_Bus_LAUSD.jpg",
		title: "Gillig Phantom (school bus)",
		start_production: 1986,
		class: "School bus",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kia_Cadenza_V6_EX_2010_%2814429289169%29.jpg/400px-Kia_Cadenza_V6_EX_2010_%2814429289169%29.jpg",
		title: "Kia Cadenza",
		start_production: 2010,
		class: "Full-size / Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Luxgen7_SUV_front.jpg/400px-Luxgen7_SUV_front.jpg",
		title: "Luxgen U7",
		start_production: 2010,
		class: "Mid-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chrysler_VIP_VG_Series_%2816416690164%29.jpg/400px-Chrysler_VIP_VG_Series_%2816416690164%29.jpg",
		title: "Chrysler VIP",
		start_production: 1969,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/LEXUS_CT200h_Japan_2011_front.JPG/400px-LEXUS_CT200h_Japan_2011_front.JPG",
		title: "Lexus CT",
		start_production: 2011,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2012_Proton_Inspira_2.0_Premium_4-door_sedan_%2819699612942%29.jpg/400px-2012_Proton_Inspira_2.0_Premium_4-door_sedan_%2819699612942%29.jpg",
		title: "Proton Inspira",
		start_production: 2010,
		class: "Compact / C-segment",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2013_Ford_Focus_%28LW_II%29_Sport_hatchback_%282015-07-24%29_01.jpg/400px-2013_Ford_Focus_%28LW_II%29_Sport_hatchback_%282015-07-24%29_01.jpg",
		title: "Ford Focus (third generation)",
		start_production: 2010,
		class: "Compact car/Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Renault_Latitude_Initiale_dCi_175_FAP_Automatik_%E2%80%93_Frontansicht%2C_25._Februar_2012%2C_D%C3%BCsseldorf.jpg/400px-Renault_Latitude_Initiale_dCi_175_FAP_Automatik_%E2%80%93_Frontansicht%2C_25._Februar_2012%2C_D%C3%BCsseldorf.jpg",
		title: "Renault Latitude",
		start_production: 2010,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flickr_-_plushev_-_Geneva2010_659.jpg/400px-Flickr_-_plushev_-_Geneva2010_659.jpg",
		title: "KSU Gazal-1",
		start_production: 2010,
		class: "Mid-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Citro%C3%ABn_DS4_HDi_165_SportChic_%E2%80%93_Frontansicht%2C_4._Juni_2011%2C_W%C3%BClfrath.jpg/400px-Citro%C3%ABn_DS4_HDi_165_SportChic_%E2%80%93_Frontansicht%2C_4._Juni_2011%2C_W%C3%BClfrath.jpg",
		title: "DS 4",
		start_production: 2010,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Alfa_Romeo_Giulia_at_IAA_%2818%29.JPG/400px-Alfa_Romeo_Giulia_at_IAA_%2818%29.JPG",
		title: "Alfa Romeo Giulia (952)",
		start_production: 2016,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mitsuoka_Himiko.jpg/400px-Mitsuoka_Himiko.jpg",
		title: "Mitsuoka Himiko",
		start_production: 2010,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Soren_ELX.jpg/400px-Soren_ELX.jpg",
		title: "IKCO Samand Soren",
		start_production: 2007,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/1974_Chevrolet_%2810754212153%29.jpg/400px-1974_Chevrolet_%2810754212153%29.jpg",
		title: "Chevrolet Impala (fifth generation)",
		start_production: 1970,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/1965_Chevrolet_Impala_Super_Sport_Coupe_%281%29.JPG/400px-1965_Chevrolet_Impala_Super_Sport_Coupe_%281%29.JPG",
		title: "Chevrolet Impala (fourth generation)",
		start_production: 1964,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2015_Chrysler_200_Limited.jpg/400px-2015_Chrysler_200_Limited.jpg",
		title: "Chrysler 200",
		start_production: 2010,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2014_Porsche_Macan_%28MY15%29_S_wagon_%282015-08-24%29.JPG/400px-2014_Porsche_Macan_%28MY15%29_S_wagon_%282015-08-24%29.JPG",
		title: "Porsche Macan",
		start_production: 2014,
		class: "Compact luxury crossover SUV (European: J-segment)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Seat_Formula_yellow_v_TCE.jpg/400px-Seat_Formula_yellow_v_TCE.jpg",
		title: "SEAT Fórmula",
		start_production: 1999,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/1st_Toyota_Prius_--_07-28-2011.jpg/400px-1st_Toyota_Prius_--_07-28-2011.jpg",
		title: "Toyota Prius (XW10)",
		start_production: 1997,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/2nd_Toyota_Prius.jpg/400px-2nd_Toyota_Prius.jpg",
		title: "Toyota Prius (XW20)",
		start_production: 2003,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/2010_Toyota_Prius_V_--_04-20-2010.jpg/400px-2010_Toyota_Prius_V_--_04-20-2010.jpg",
		title: "Toyota Prius (XW30)",
		start_production: 2009,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vw_passat_b1_v_sst.jpg/400px-Vw_passat_b1_v_sst.jpg",
		title: "Volkswagen Passat (B1)",
		start_production: 1973,
		class: "Mid-size car / Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/VW_Passat_B2_front_20081007.jpg/400px-VW_Passat_B2_front_20081007.jpg",
		title: "Volkswagen Passat (B2)",
		start_production: 1981,
		class: "Mid-size car / Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/VW_Passat_front_20080313.jpg/400px-VW_Passat_front_20080313.jpg",
		title: "Volkswagen Passat (B4)",
		start_production: 1993,
		class: "Mid-size car / Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VW_Passat_B3_Variant_rear_20080215.jpg/400px-VW_Passat_B3_Variant_rear_20080215.jpg",
		title: "Volkswagen Passat B3",
		start_production: 1988,
		class: "{{ubl|Large family car |Mid-size car},},",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/1998-2001_Volkswagen_Passat_sedan_--_03-21-2012.JPG/400px-1998-2001_Volkswagen_Passat_sedan_--_03-21-2012.JPG",
		title: "Volkswagen Passat (B5)",
		start_production: 1996,
		class: "Mid-size car / Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2006-2010_Volkswagen_Passat_%283C%29_sedan_%282011-07-17%29_01.jpg/400px-2006-2010_Volkswagen_Passat_%283C%29_sedan_%282011-07-17%29_01.jpg",
		title: "Volkswagen Passat (B6)",
		start_production: 2004,
		class: "Mid-size car / Large family car",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Cosworth-Vega.jpg",
		title: "Chevrolet Cosworth Vega",
		start_production: 1975,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Audi-GT-front.jpg/400px-Audi-GT-front.jpg",
		title: "Audi Coupé (B2)",
		start_production: 1980,
		class: "Sports car, Coupé",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Audi_RS2.jpg/400px-Audi_RS2.jpg",
		title: "Audi RS 2 Avant",
		start_production: 1994,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Buick_Rainier_--_04-05-2011.jpg/400px-Buick_Rainier_--_04-05-2011.jpg",
		title: "Buick Rainier",
		class: "Mid-size SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Toyota_HARRIER_ELEGANCE_%28ZSU60W%29_front.JPG/400px-Toyota_HARRIER_ELEGANCE_%28ZSU60W%29_front.JPG",
		title: "Toyota Harrier",
		start_production: 2013,
		class: "Mid-size luxury SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/20120527_kia_k9_2.JPG/400px-20120527_kia_k9_2.JPG",
		title: "Kia K9",
		start_production: 2012,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2014_Renault_Captur_%2814931859481%29.jpg/400px-2014_Renault_Captur_%2814931859481%29.jpg",
		title: "Renault Captur",
		start_production: 2013,
		class: "Compact crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mazda_etude.jpg/400px-Mazda_etude.jpg",
		title: "Mazda Étude",
		start_production: 1987,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ikco_dena_f.jpg/400px-Ikco_dena_f.jpg",
		title: "IKCO Dena",
		start_production: 2012,
		class: "Family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/2014_Holden_Commodore_%28VF_MY14%29_SS_sedan_%282015-11-11%29_01.jpg/400px-2014_Holden_Commodore_%28VF_MY14%29_SS_sedan_%282015-11-11%29_01.jpg",
		title: "Holden Commodore (VF)",
		start_production: 2013,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2005-2007_Ford_Focus_Zetec_UK.jpg/400px-2005-2007_Ford_Focus_Zetec_UK.jpg",
		title: "Ford Focus (second generation, Europe)",
		start_production: 2004,
		class: "Compact car / Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ford_B-Max_%2811064554273%29.jpg/400px-Ford_B-Max_%2811064554273%29.jpg",
		title: "Ford B-Max",
		start_production: 2012,
		class: "Mini MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jaguar_X100_front_20080313.jpg/400px-Jaguar_X100_front_20080313.jpg",
		title: "Jaguar XK (X100)",
		start_production: 1996,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2012_Toyota_Prius_c_--_05-23-2012_2.JPG/400px-2012_Toyota_Prius_c_--_05-23-2012_2.JPG",
		title: "Toyota Prius C",
		start_production: 2011,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2010_Proton_Tuah_concept_at_the_2011_Hari_Merdeka_%26_Malaysia_celebrations_in_Dataran_Merdeka%2C_Kuala_Lumpur.jpg/400px-2010_Proton_Tuah_concept_at_the_2011_Hari_Merdeka_%26_Malaysia_celebrations_in_Dataran_Merdeka%2C_Kuala_Lumpur.jpg",
		title: "Proton Prevé",
		start_production: 2012,
		class: "Compact / C-segment",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Geneva_MotorShow_2013_-_Dacia_Lodgy.jpg/400px-Geneva_MotorShow_2013_-_Dacia_Lodgy.jpg",
		title: "Dacia Lodgy",
		start_production: 2012,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/1931Cadillac370AcoupeV12.jpg/400px-1931Cadillac370AcoupeV12.jpg",
		title: "Cadillac V-12",
		start_production: 1930,
		class: "Full-size luxury car",
	},
	{
		image: "",
		title: "Škoda Rapid (2011)",
		start_production: 2011,
		class: "Subcompact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Dodge_Dart_2.0_Rallye_2014_%2814217526095%29.jpg/400px-Dodge_Dart_2.0_Rallye_2014_%2814217526095%29.jpg",
		title: "Dodge Dart (PF)",
		start_production: 2012,
		class: "Compact car (C-segment)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Opel_Mokka_ecoFLEX_Edition_%E2%80%93_Frontansicht%2C_25._August_2013%2C_D%C3%BCsseldorf.jpg/400px-Opel_Mokka_ecoFLEX_Edition_%E2%80%93_Frontansicht%2C_25._August_2013%2C_D%C3%BCsseldorf.jpg",
		title: "Opel Mokka",
		start_production: 2012,
		class: "Mini sport utility vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/1948_Pontiac_Streamliner_Deluxe_-_Flickr_-_exfordy_%281%29.jpg/400px-1948_Pontiac_Streamliner_Deluxe_-_Flickr_-_exfordy_%281%29.jpg",
		title: "Pontiac Streamliner",
		start_production: 1941,
		class: "Full-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2012_Volkswagen_Beetle_--_NHTSA_2.jpg/400px-2012_Volkswagen_Beetle_--_NHTSA_2.jpg",
		title: "Volkswagen Beetle (A5)",
		start_production: 2011,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2012_Dacia_Dokker.JPG/400px-2012_Dacia_Dokker.JPG",
		title: "Dacia Dokker",
		start_production: 2012,
		class: "Leisure activity vehicle (Dokker) Panel van (Dokker Van)",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2012_Geneva_Motor_Show_-_Fiat_500L.jpg/400px-2012_Geneva_Motor_Show_-_Fiat_500L.jpg",
		title: "Fiat 500L",
		start_production: 2012,
		class: "Mini MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ford_F-150_XL_SuperCrew_--_03-10-2010.jpg/400px-Ford_F-150_XL_SuperCrew_--_03-10-2010.jpg",
		title: "Ford F-Series twelfth generation",
		start_production: 2008,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ford_F-150_FX4_--_09-07-2009.jpg/400px-Ford_F-150_FX4_--_09-07-2009.jpg",
		title: "Ford F-Series eleventh generation",
		start_production: 2003,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ford_F-150_XL_regular_cab.jpg/400px-Ford_F-150_XL_regular_cab.jpg",
		title: "Ford F-Series tenth generation",
		class: "Full-size pickup truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Opel_Rekord_v.JPG/400px-Opel_Rekord_v.JPG",
		title: "Opel Rekord Series C",
		start_production: 1966,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Opel_Adam_1.4_Glam_%E2%80%93_Frontansicht%2C_15._Januar_2014%2C_D%C3%BCsseldorf.jpg/400px-Opel_Adam_1.4_Glam_%E2%80%93_Frontansicht%2C_15._Januar_2014%2C_D%C3%BCsseldorf.jpg",
		title: "Opel Adam",
		start_production: 2012,
		class: "City car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chevrolet_Trax_LS%2B_1.4_4WD_%E2%80%93_Frontansicht%2C_11._August_2013%2C_Wuppertal.jpg/400px-Chevrolet_Trax_LS%2B_1.4_4WD_%E2%80%93_Frontansicht%2C_11._August_2013%2C_Wuppertal.jpg",
		title: "Chevrolet Trax",
		start_production: 2013,
		class: "Mini SUV/subcompact crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Toyota_MiniAce_UP100.jpg/400px-Toyota_MiniAce_UP100.jpg",
		title: "Toyota MiniAce",
		start_production: 1967,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Peugeot_301_1.6_HDi_Allure_2014_%2814194363316%29.jpg/400px-Peugeot_301_1.6_HDi_Allure_2014_%2814194363316%29.jpg",
		title: "Peugeot 301 (2012)",
		start_production: 2012,
		class: "Compact car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Lada_Largus_in_Tomsk.JPG/400px-Lada_Largus_in_Tomsk.JPG",
		title: "Lada Largus",
		start_production: 2012,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mondial_de_l%27automobile_de_Paris_2014_-_Fiat_500X_-_001.jpg/400px-Mondial_de_l%27automobile_de_Paris_2014_-_Fiat_500X_-_001.jpg",
		title: "Fiat 500X",
		start_production: 2014,
		class: "Mini crossover sport utility vehicle",
	},
	{
		image: "",
		title: "Škoda Rapid (2012)",
		start_production: 2012,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Jaguar_XE_2016_front_three-quarter.jpg/400px-Jaguar_XE_2016_front_three-quarter.jpg",
		title: "Jaguar XE",
		class: "Midsize car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/VW_Golf_1.6_TDI_BlueMotion_Technology_Comfortline_%28VII%29_%E2%80%93_Frontansicht%2C_31._Dezember_2012%2C_D%C3%BCsseldorf.jpg/400px-VW_Golf_1.6_TDI_BlueMotion_Technology_Comfortline_%28VII%29_%E2%80%93_Frontansicht%2C_31._Dezember_2012%2C_D%C3%BCsseldorf.jpg",
		title: "Volkswagen Golf Mk7",
		start_production: 2012,
		class: "Compact car / Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Opel_Cascada_Cockpit.JPG/400px-Opel_Cascada_Cockpit.JPG",
		title: "Opel Cascada",
		start_production: 2013,
		class: "Mid-size convertible",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Scania_113_M_380.jpg/400px-Scania_113_M_380.jpg",
		title: "Scania 3-series",
		start_production: 1987,
		class: "Heavy truck",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/2014_Chevy_Corvette_Stingray_in_yellow_at_LA_Auto_Show.jpg/400px-2014_Chevy_Corvette_Stingray_in_yellow_at_LA_Auto_Show.jpg",
		title: "Chevrolet Corvette (C7)",
		start_production: 2013,
		class: "Sports car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/1955_Toyopet_Master_01.jpg/400px-1955_Toyopet_Master_01.jpg",
		title: "Toyopet Master",
		start_production: 1955,
		class: "large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Chevrolet_Spin_LTZ_%2814640332610%29.jpg/400px-Chevrolet_Spin_LTZ_%2814640332610%29.jpg",
		title: "Chevrolet Spin",
		start_production: 2012,
		class: "Mini MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Volkswagen_Passat_Lingyu_China_2012-04-04.jpg/400px-Volkswagen_Passat_Lingyu_China_2012-04-04.jpg",
		title: "Volkswagen Passat Lingyu",
		start_production: 2005,
		class: "mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Chevrolet_Onix_20150814-DSC05650.JPG/400px-Chevrolet_Onix_20150814-DSC05650.JPG",
		title: "Chevrolet Onix",
		start_production: 2012,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2014_Jeep_Cherokee_%28KL_MY15%29_Limited_wagon_%282015-07-09%29_01.jpg/400px-2014_Jeep_Cherokee_%28KL_MY15%29_Limited_wagon_%282015-07-09%29_01.jpg",
		title: "Jeep Cherokee (KL)",
		start_production: 2013,
		class: "Mid-size crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Volkswagen_Jetta_II_01_China_2013-03-04.JPG/400px-Volkswagen_Jetta_II_01_China_2013-03-04.JPG",
		title: "Volkswagen Jetta Night",
		start_production: 2013,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Volkswagen_Jetta_facelift_III_01_China_2012-06-23.JPG/400px-Volkswagen_Jetta_facelift_III_01_China_2012-06-23.JPG",
		title: "Volkswagen Jetta Pionier",
		start_production: 2010,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Volkswagen_Jetta_facelift_China_2013-03-04.jpg/400px-Volkswagen_Jetta_facelift_China_2013-03-04.jpg",
		title: "Volkswagen Jetta König",
		start_production: 1997,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VOLVO_TRUCK_AUG_31_2007_WASHINGTON_BLVD_LOS_ANGELES_IMAGE_PATRICE_RAUNET_HOLLYWOOD.jpg/400px-VOLVO_TRUCK_AUG_31_2007_WASHINGTON_BLVD_LOS_ANGELES_IMAGE_PATRICE_RAUNET_HOLLYWOOD.jpg",
		title: "Volvo VN",
		start_production: 1996,
		class: "Heavy Duty Tractor Class 8",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Lincoln_mkc_front.jpg/400px-Lincoln_mkc_front.jpg",
		title: "Lincoln MKC",
		class: "Compact luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Toyota_Corolla_Axio_%28E160%29_front.JPG/400px-Toyota_Corolla_Axio_%28E160%29_front.JPG",
		title: "Toyota Corolla (E160)",
		start_production: 2012,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Robert_Barrable_Rally_Finland_2013_Surkee.JPG/400px-Robert_Barrable_Rally_Finland_2013_Surkee.JPG",
		title: "Ford Fiesta R5",
		start_production: 2013,
		class: "R5",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Proton_Suprima_S_Front_Three_Quarter_Facing_Left.jpg/400px-Proton_Suprima_S_Front_Three_Quarter_Facing_Left.jpg",
		title: "Proton Suprima S",
		start_production: 2013,
		class: "Compact / C-segment",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Peugeot_208_T16_-_Mondial_de_l%27Automobile_de_Paris_2014_-_001.jpg/400px-Peugeot_208_T16_-_Mondial_de_l%27Automobile_de_Paris_2014_-_001.jpg",
		title: "Peugeot 208 T16",
		start_production: 2014,
		class: "R5",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Roewe_950_02_China_2012-07-21.JPG/400px-Roewe_950_02_China_2012-07-21.JPG",
		title: "Roewe 950",
		start_production: 2012,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/1993-1995_Jeep_Grand_Cherokee_--_03-30-2012.JPG/400px-1993-1995_Jeep_Grand_Cherokee_--_03-30-2012.JPG",
		title: "Jeep Grand Cherokee (ZJ)",
		start_production: 1992,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/John_Deere_Modell_A.jpg/400px-John_Deere_Modell_A.jpg",
		title: "John Deere Model A",
		start_production: 1934,
		class: "row crop tractor",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/BMW_218i_Active_Tourer_Advantage_%28F45%29_%E2%80%93_Frontansicht%2C_15._M%C3%A4rz_2015%2C_D%C3%BCsseldorf.jpg/400px-BMW_218i_Active_Tourer_Advantage_%28F45%29_%E2%80%93_Frontansicht%2C_15._M%C3%A4rz_2015%2C_D%C3%BCsseldorf.jpg",
		title: "BMW 2 Series Active Tourer",
		start_production: 2014,
		class: "Compact MPV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jeep_Renegade_1.6_MultiJet_2WD_Longitude_%E2%80%93_Frontansicht%2C_9._November_2014%2C_D%C3%BCsseldorf.jpg/400px-Jeep_Renegade_1.6_MultiJet_2WD_Longitude_%E2%80%93_Frontansicht%2C_9._November_2014%2C_D%C3%BCsseldorf.jpg",
		title: "Jeep Renegade (BU)",
		start_production: 2014,
		class: "Subcompact crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2014_Lexus_NX_300h_%28AYZ15R%29_F_Sport_wagon_%282015-07-09%29_01.jpg/400px-2014_Lexus_NX_300h_%28AYZ15R%29_F_Sport_wagon_%282015-07-09%29_01.jpg",
		title: "Lexus NX",
		class: "Compact luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2015_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282015-11-11%29_01.jpg/400px-2015_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282015-11-11%29_01.jpg",
		title: "Toyota Corolla (E170)",
		start_production: 2013,
		class: "Compact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/DS_6_01_China_2015-04-08.jpg/400px-DS_6_01_China_2015-04-08.jpg",
		title: "DS 6",
		start_production: 2014,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dodge_300_%28LAD%29_in_grimy_grey.jpg/400px-Dodge_300_%28LAD%29_in_grimy_grey.jpg",
		title: "Dodge 300",
		start_production: 1957,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/1994_Mercedes-Benz_C_220_%28W202%29_Elegance_sedan_%282015-11-13%29_01.jpg/400px-1994_Mercedes-Benz_C_220_%28W202%29_Elegance_sedan_%282015-11-13%29_01.jpg",
		title: "Mercedes-Benz C-Class (W202)",
		start_production: 1993,
		class: "Compact executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2015_Ford_Mondeo_1.6_Zetec_Econetic_TDCi_Estate_%2816922091829%29.jpg/400px-2015_Ford_Mondeo_1.6_Zetec_Econetic_TDCi_Estate_%2816922091829%29.jpg",
		title: "Ford Mondeo (fourth generation)",
		start_production: 2014,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ford_Mondeo_3_%282007%29_Sedan.jpg/400px-Ford_Mondeo_3_%282007%29_Sedan.jpg",
		title: "Ford Mondeo (third generation)",
		start_production: 2007,
		class: "Large family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ford_Mondeo_I_Turnier_20090308_front.jpg/400px-Ford_Mondeo_I_Turnier_20090308_front.jpg",
		title: "Ford Mondeo (first generation)",
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buick_Envision_02_China_2015-04-06.jpg/400px-Buick_Envision_02_China_2015-04-06.jpg",
		title: "Buick Envision",
		start_production: 2014,
		class: "Mid-size crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Kings_Ferry_6.21_FJ61EXF_%288717059549%29.jpg/400px-Kings_Ferry_6.21_FJ61EXF_%288717059549%29.jpg",
		title: "Volvo B13R",
		start_production: 2009,
		class: "Coach chassis",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Land_Rover_Discovery_Sport_-_Static_%2815071077156%29.jpg/400px-Land_Rover_Discovery_Sport_-_Static_%2815071077156%29.jpg",
		title: "Land Rover Discovery Sport",
		start_production: 2014,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Vladimir_Putin_driving_Lada_Vesta_04.jpg/400px-Vladimir_Putin_driving_Lada_Vesta_04.jpg",
		title: "Lada Vesta",
		start_production: 2015,
		class: "Small family car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Opel_KARL_%281%29.jpg/400px-Opel_KARL_%281%29.jpg",
		title: "Opel Karl",
		start_production: 2014,
		class: "City car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2014_Ford_Tourneo_Courier_%28fl%29.jpg/400px-2014_Ford_Tourneo_Courier_%28fl%29.jpg",
		title: "Ford Transit Courier",
		start_production: 2014,
		class: "Leisure activity vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2014_Rolls-Royce_Wraith_%28MY14%29_coupe_%282015-07-25%29_01.jpg/400px-2014_Rolls-Royce_Wraith_%28MY14%29_coupe_%282015-07-25%29_01.jpg",
		title: "Rolls-Royce Wraith (2013)",
		start_production: 2013,
		class: "Luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Stagecoach_Midlands_54220_YX63NHG_-_Flickr_-_Alan_Sansbury.jpg/400px-Stagecoach_Midlands_54220_YX63NHG_-_Flickr_-_Alan_Sansbury.jpg",
		title: "Volvo B11R",
		start_production: 2011,
		class: "Coach chassis",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Bentley_Bentayga_in_blue.jpg/400px-Bentley_Bentayga_in_blue.jpg",
		title: "Bentley Bentayga",
		start_production: 2015,
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Aston_Martin_DB10_2015.jpg/400px-Aston_Martin_DB10_2015.jpg",
		title: "Aston Martin DB10",
		start_production: 2014,
		class: "Grand tourer",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/See-through-white-2017-Chevrolet-BoltEV-024.jpg/400px-See-through-white-2017-Chevrolet-BoltEV-024.jpg",
		title: "Chevrolet Bolt",
		start_production: 2016,
		class: "Subcompact",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Cadillac_CT6_04_2015.jpg/400px-Cadillac_CT6_04_2015.jpg",
		title: "Cadillac CT6",
		start_production: 2016,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hyundai_ASLAN_Front-Side.png/400px-Hyundai_ASLAN_Front-Side.png",
		title: "Hyundai Aslan",
		start_production: 2014,
		class: "Executive car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Renault_Kadjar_front.jpg/400px-Renault_Kadjar_front.jpg",
		title: "Renault Kadjar",
		start_production: 2015,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ford_Fiesta_MK3_front_20070926.jpg/400px-Ford_Fiesta_MK3_front_20070926.jpg",
		title: "Ford Fiesta (third generation)",
		start_production: 1989,
		class: "Supermini",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/MG_GS_01_China_2015-04-08.jpg/400px-MG_GS_01_China_2015-04-08.jpg",
		title: "MG GS",
		start_production: 2015,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/VW_Passat_B8_Limousine_2.0_TDI_Highline.JPG/400px-VW_Passat_B8_Limousine_2.0_TDI_Highline.JPG",
		title: "Volkswagen Passat (B8)",
		start_production: 2014,
		class: "Mid-size car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/20150522032141_k3.jpg/400px-20150522032141_k3.jpg",
		title: "Renault Kwid",
		start_production: 2015,
		class: "Entry-level crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%2716_Chevrolet_Camaro_Convertible_%28MIAS_%2716%29.jpg/400px-%2716_Chevrolet_Camaro_Convertible_%28MIAS_%2716%29.jpg",
		title: "Chevrolet Camaro (sixth generation)",
		start_production: 2015,
		class: "Pony car Muscle car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alpina_B10_BiTurbo_BASIS_BMW_5er_Gen3_E34_1989-1994_frontleft_2011-06-04_U.jpg/400px-Alpina_B10_BiTurbo_BASIS_BMW_5er_Gen3_E34_1989-1994_frontleft_2011-06-04_U.jpg",
		title: "Alpina B10 Biturbo",
		start_production: 1989,
		class: "Mid-size",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2016_BMW_7-Series_%28G11%29_sedan%2C_front_view.jpg/400px-2016_BMW_7-Series_%28G11%29_sedan%2C_front_view.jpg",
		title: "BMW 7 Series (G11)",
		start_production: 2015,
		class: "Full-size luxury car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Citro%C3%ABn_C4_Cactus_BlueHDi_100_Shine_Edition_%E2%80%93_Frontansicht_%283%29%2C_2._November_2014%2C_M%C3%BCnster.jpg/400px-Citro%C3%ABn_C4_Cactus_BlueHDi_100_Shine_Edition_%E2%80%93_Frontansicht_%283%29%2C_2._November_2014%2C_M%C3%BCnster.jpg",
		title: "Citroën C4 Cactus",
		start_production: 2014,
		class: "Mini crossover",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ashok_Leyland_STiLE.jpg/400px-Ashok_Leyland_STiLE.jpg",
		title: "Ashok Leyland STiLE",
		start_production: 2013,
		class: "Minivan",
	},
	{
		image: "",
		title: "Tata Movus",
		start_production: 2014,
		class: "MUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tata_Safari_Storme%2C_by_SouLSteer%2C_Maharaj_Bada_from_Gwalior%2C_April_2013.jpg/400px-Tata_Safari_Storme%2C_by_SouLSteer%2C_Maharaj_Bada_from_Gwalior%2C_April_2013.jpg",
		title: "Tata Safari Storme",
		start_production: 2012,
		class: "SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mahindra_TUV_300_Chennai_2016_%282%29.JPG/400px-Mahindra_TUV_300_Chennai_2016_%282%29.JPG",
		title: "Mahindra TUV300",
		start_production: 2015,
		class: "Mini sport utility vehicle",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tata_Nano_-_GenX_01.JPG/400px-Tata_Nano_-_GenX_01.JPG",
		title: "Tata GenX Nano",
		start_production: 2015,
		class: "City car",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jiangling_Yusheng_01_China_2012-06-02.JPG/400px-Jiangling_Yusheng_01_China_2012-06-02.JPG",
		title: "JMC Yusheng",
		start_production: 2010,
		class: "Mid-sized crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Citro%C3%ABn_e-Mehari.jpg/400px-Citro%C3%ABn_e-Mehari.jpg",
		title: "Citroën E-Méhari",
		start_production: 2016,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Cadillac_XT5.jpg/400px-Cadillac_XT5.jpg",
		title: "Cadillac XT5",
		start_production: 2016,
		class: "Mid-size luxury crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/2017_Pacifica.jpg/400px-2017_Pacifica.jpg",
		title: "Chrysler Pacifica (RU)",
		start_production: 2016,
		class: "Minivan",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2016-03-01_Geneva_Motor_Show_G052.JPG/400px-2016-03-01_Geneva_Motor_Show_G052.JPG",
		title: "SEAT Ateca",
		start_production: 2016,
		class: "Compact crossover SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Audi_Q2_Genfer_Automobilsalon_2016.jpg/400px-Audi_Q2_Genfer_Automobilsalon_2016.jpg",
		title: "Audi Q2",
		start_production: 2016,
		class: "Compact SUV",
	},
	{
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Fiat_Tipo_-_prz%C3%B3d_%28MSP16%29.jpg/400px-Fiat_Tipo_-_prz%C3%B3d_%28MSP16%29.jpg",
		title: "Fiat Tipo (2015)",
		start_production: 2015,
		class: "Compact car",
	},
]
function displayCars ()
{
    cars.forEach(function (ele, ind)
    {
        const div = document.createElement('div');
        div.classList.add('car')
        const image = document.createElement('img');
        image.src = ele.image;
        const button = document.createElement('button');
        button.textContent = ele.title;
        div.append(image, button);
        mainDiv.appendChild(div)
    })
}
displayCars();