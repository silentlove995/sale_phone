USE [projectSem4]
GO
/****** Object:  Table [dbo].[brands]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[brands](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categories]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categories](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[name] [varchar](255) NULL,
	[brand_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comments]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comments](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[content] [varchar](max) NULL,
	[product_id] [bigint] NULL,
	[user_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[order_details]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order_details](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[discount] [numeric](19, 2) NULL,
	[price] [numeric](19, 2) NULL,
	[quantity] [int] NULL,
	[sub_total] [numeric](19, 2) NULL,
	[order_id] [bigint] NULL,
	[product_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[order_status] [int] NOT NULL,
	[shipping_address] [varchar](max) NOT NULL,
	[total_amount] [numeric](19, 2) NOT NULL,
	[users_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product_images]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product_images](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[data] [varchar](max) NULL,
	[name] [varchar](255) NULL,
	[product_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[color] [varchar](255) NULL,
	[description] [varchar](max) NULL,
	[discount] [varchar](255) NULL,
	[model] [varchar](255) NULL,
	[name] [varchar](255) NULL,
	[original_price] [numeric](19, 2) NULL,
	[sale_price] [numeric](19, 2) NULL,
	[stock_quantity] [int] NULL,
	[tech_description] [varbinary](max) NULL,
	[brand_id] [bigint] NULL,
	[category_id] [bigint] NULL,
	[order_details_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rating]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rating](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[rating_comment] [varchar](max) NULL,
	[star_rating] [int] NULL,
	[product_id] [bigint] NULL,
	[user_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roles](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[role_name] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_role]    Script Date: 18-Oct-23 22:45:11 ******/
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
/****** Object:  Table [dbo].[users]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[address] [varchar](255) NULL,
	[email] [varchar](100) NOT NULL,
	[full_name] [varchar](255) NULL,
	[password] [varchar](120) NOT NULL,
	[phone] [varchar](255) NULL,
	[user_name] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK6dotkott2kjsp8vw4d0m25fb7] UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UKk8d0f2n7n88w1a16yhua64onx] UNIQUE NONCLUSTERED 
(
	[user_name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[vouchers]    Script Date: 18-Oct-23 22:45:11 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[vouchers](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_at] [datetime2](7) NULL,
	[created_by] [varchar](255) NULL,
	[updated_at] [datetime2](7) NULL,
	[updated_by] [varchar](255) NULL,
	[discount_amount] [numeric](19, 2) NOT NULL,
	[expiry_date] [date] NOT NULL,
	[categories_eligible] [numeric](19, 2) NOT NULL,
	[products_eligible] [varchar](max) NOT NULL,
	[min_purchase_amount] [bit] NOT NULL,
	[usage_limit] [int] NOT NULL,
	[voucher_code] [varchar](50) NOT NULL,
	[voucher_type] [varchar](50) NOT NULL,
	[category_eligible] [varchar](max) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[categories]  WITH CHECK ADD  CONSTRAINT [FKqo7dpwn19xkagkhnbqva3sgws] FOREIGN KEY([brand_id])
REFERENCES [dbo].[brands] ([id])
GO
ALTER TABLE [dbo].[categories] CHECK CONSTRAINT [FKqo7dpwn19xkagkhnbqva3sgws]
GO
ALTER TABLE [dbo].[comments]  WITH CHECK ADD  CONSTRAINT [FK6uv0qku8gsu6x1r2jkrtqwjtn] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[comments] CHECK CONSTRAINT [FK6uv0qku8gsu6x1r2jkrtqwjtn]
GO
ALTER TABLE [dbo].[comments]  WITH CHECK ADD  CONSTRAINT [FK8omq0tc18jd43bu5tjh6jvraq] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[comments] CHECK CONSTRAINT [FK8omq0tc18jd43bu5tjh6jvraq]
GO
ALTER TABLE [dbo].[order_details]  WITH CHECK ADD  CONSTRAINT [FK4q98utpd73imf4yhttm3w0eax] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[order_details] CHECK CONSTRAINT [FK4q98utpd73imf4yhttm3w0eax]
GO
ALTER TABLE [dbo].[order_details]  WITH CHECK ADD  CONSTRAINT [FKjyu2qbqt8gnvno9oe9j2s2ldk] FOREIGN KEY([order_id])
REFERENCES [dbo].[orders] ([id])
GO
ALTER TABLE [dbo].[order_details] CHECK CONSTRAINT [FKjyu2qbqt8gnvno9oe9j2s2ldk]
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD  CONSTRAINT [FKe6k45xxoin4fylnwg2jkehwjf] FOREIGN KEY([users_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[orders] CHECK CONSTRAINT [FKe6k45xxoin4fylnwg2jkehwjf]
GO
ALTER TABLE [dbo].[product_images]  WITH CHECK ADD  CONSTRAINT [FKqnq71xsohugpqwf3c9gxmsuy] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[product_images] CHECK CONSTRAINT [FKqnq71xsohugpqwf3c9gxmsuy]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK33l99wc0x1d0tlso17wyusmk9] FOREIGN KEY([order_details_id])
REFERENCES [dbo].[order_details] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK33l99wc0x1d0tlso17wyusmk9]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FKa3a4mpsfdf4d2y6r8ra3sc8mv] FOREIGN KEY([brand_id])
REFERENCES [dbo].[brands] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FKa3a4mpsfdf4d2y6r8ra3sc8mv]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FKog2rp4qthbtt2lfyhfo32lsw9] FOREIGN KEY([category_id])
REFERENCES [dbo].[categories] ([id])
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FKog2rp4qthbtt2lfyhfo32lsw9]
GO
ALTER TABLE [dbo].[rating]  WITH CHECK ADD  CONSTRAINT [FK4odf7rh1jmwmew4dnowoc73cf] FOREIGN KEY([product_id])
REFERENCES [dbo].[products] ([id])
GO
ALTER TABLE [dbo].[rating] CHECK CONSTRAINT [FK4odf7rh1jmwmew4dnowoc73cf]
GO
ALTER TABLE [dbo].[rating]  WITH CHECK ADD  CONSTRAINT [FKf68lgbsbxl310n0jifwpfqgfh] FOREIGN KEY([user_id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[rating] CHECK CONSTRAINT [FKf68lgbsbxl310n0jifwpfqgfh]
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
