USE [projectSem4]
GO
/****** Object:  Table [dbo].[order_items]    Script Date: 03-Oct-23 22:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_items](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [bigint] NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [bigint] NULL,
	[updated_by] [varchar](255) NULL,
	[discount] [varchar](255) NULL,
	[price] [varchar](255) NULL,
	[quantity] [varchar](255) NULL,
	[sub_total] [varchar](255) NULL,
	[order_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 03-Oct-23 22:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [bigint] NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [bigint] NULL,
	[updated_by] [varchar](255) NULL,
	[order_status] [varchar](255) NULL,
	[total_amount] [varchar](255) NULL,
	[users_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[pictures]    Script Date: 03-Oct-23 22:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pictures](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [bigint] NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [bigint] NULL,
	[updated_by] [varchar](255) NULL,
	[data] [varbinary](max) NULL,
	[name] [varchar](255) NULL,
	[product_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 03-Oct-23 22:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [bigint] NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [bigint] NULL,
	[updated_by] [varchar](255) NULL,
	[available_space] [varchar](255) NULL,
	[battery] [varchar](255) NULL,
	[battery_tech] [varchar](255) NULL,
	[battery_type] [varchar](255) NULL,
	[bluetooth] [varchar](255) NULL,
	[brand] [int] NULL,
	[brightness] [varchar](255) NULL,
	[camera_feature_back] [varchar](255) NULL,
	[camera_feature_front] [varchar](255) NULL,
	[camera_flash_back] [varchar](255) NULL,
	[camera_flash_front] [varchar](255) NULL,
	[camera_resolution_back] [varchar](255) NULL,
	[camera_resolution_front] [varchar](255) NULL,
	[camera_support_back] [varchar](255) NULL,
	[camera_support_front] [varchar](255) NULL,
	[card_reader] [varchar](255) NULL,
	[charging_port] [varchar](255) NULL,
	[color] [varchar](255) NULL,
	[connect_port] [varchar](255) NULL,
	[contact] [varchar](255) NULL,
	[core] [varchar](255) NULL,
	[cpu] [varchar](255) NULL,
	[cpu_cache] [varchar](255) NULL,
	[cpu_max_speed] [varchar](255) NULL,
	[cpu_speed] [varchar](255) NULL,
	[description] [varchar](255) NULL,
	[design_type] [varchar](255) NULL,
	[discount] [varchar](255) NULL,
	[disk_space] [varchar](255) NULL,
	[glass_surface] [varchar](255) NULL,
	[gps] [varchar](255) NULL,
	[gpu] [varchar](255) NULL,
	[hard_disk] [varchar](255) NULL,
	[headset] [varchar](255) NULL,
	[keyboard_light] [varchar](255) NULL,
	[material] [varchar](255) NULL,
	[max_ram_support] [varchar](255) NULL,
	[max_wattage_support] [varchar](255) NULL,
	[model] [varchar](255) NULL,
	[movie_support] [varchar](255) NULL,
	[music_support] [varchar](255) NULL,
	[name] [varchar](255) NULL,
	[network] [varchar](255) NULL,
	[original_price] [varchar](255) NULL,
	[os] [varchar](255) NULL,
	[other_connect] [varchar](255) NULL,
	[ram] [varchar](255) NULL,
	[ram_bus] [varchar](255) NULL,
	[ram_type] [varchar](255) NULL,
	[recorder] [varchar](255) NULL,
	[refresh_rate] [varchar](255) NULL,
	[release_date] [varchar](255) NULL,
	[resolution] [varchar](255) NULL,
	[sale_price] [varchar](255) NULL,
	[screen_tech] [varchar](255) NULL,
	[security] [varchar](255) NULL,
	[sim] [varchar](255) NULL,
	[size] [varchar](255) NULL,
	[special_feature] [varchar](255) NULL,
	[thread] [varchar](255) NULL,
	[type] [varchar](255) NULL,
	[water_resit] [varchar](255) NULL,
	[webcam] [varchar](255) NULL,
	[weight] [varchar](255) NULL,
	[width] [varchar](255) NULL,
	[wifi] [varchar](255) NULL,
	[wireless_support] [varchar](255) NULL,
	[order_items_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 03-Oct-23 22:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roles](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [bigint] NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [bigint] NULL,
	[updated_by] [varchar](255) NULL,
	[role_name] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_role]    Script Date: 03-Oct-23 22:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_role](
	[users_id] [bigint] NOT NULL,
	[roles_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[users_id] ASC,
	[roles_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 03-Oct-23 22:18:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [bigint] NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [bigint] NULL,
	[updated_by] [varchar](255) NULL,
	[address] [varchar](255) NULL,
	[email] [varchar](255) NULL,
	[first_name] [varchar](255) NULL,
	[last_name] [varchar](255) NULL,
	[password] [varchar](255) NULL,
	[phone] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK6dotkott2kjsp8vw4d0m25fb7] UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UKdu5v5sr43g5bfnji4vb8hg5s3] UNIQUE NONCLUSTERED 
(
	[phone] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[order_items]  WITH CHECK ADD  CONSTRAINT [FKbioxgbv59vetrxe0ejfubep1w] FOREIGN KEY([order_id])
REFERENCES [dbo].[orders] ([id])
GO
ALTER TABLE [dbo].[order_items] CHECK CONSTRAINT [FKbioxgbv59vetrxe0ejfubep1w]
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD  CONSTRAINT [FKe6k45xxoin4fylnwg2jkehwjf] FOREIGN KEY([users_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[orders] CHECK CONSTRAINT [FKe6k45xxoin4fylnwg2jkehwjf]
GO
ALTER TABLE [dbo].[pictures]  WITH CHECK ADD  CONSTRAINT [FK43hu51t487tsmo7tltxmdx9br] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[pictures] CHECK CONSTRAINT [FK43hu51t487tsmo7tltxmdx9br]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FKe69d4n4qd6fuacjyk7wustfl3] FOREIGN KEY([order_items_id])
REFERENCES [dbo].[order_items] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FKe69d4n4qd6fuacjyk7wustfl3]
GO
ALTER TABLE [dbo].[user_role]  WITH CHECK ADD  CONSTRAINT [FK66ou45fyydgltrhvuc81rp15q] FOREIGN KEY([roles_id])
REFERENCES [dbo].[roles] ([id])
GO
ALTER TABLE [dbo].[user_role] CHECK CONSTRAINT [FK66ou45fyydgltrhvuc81rp15q]
GO
ALTER TABLE [dbo].[user_role]  WITH CHECK ADD  CONSTRAINT [FKm3tmf7s11ilny7lvpiks60j0n] FOREIGN KEY([users_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[user_role] CHECK CONSTRAINT [FKm3tmf7s11ilny7lvpiks60j0n]
GO
