import { Column } from "typeorm";

/**
 * remote_product_id	string			
store_id	int			
event_type	enum			
product_name	string			
price	double			
price_origin	double			
product_image	text			
start_date,end_date	dateTime			
is_display	enum	공개, 비공개 외 다른 상태 값의 추가를 생각하여 enum처리		
 */
@Entity("product")
export class ProductEntity {
  @PrimaryColumn({ type: "varchar" })
  remote_product_id;

  @PrimaryColumn({ type: "int" })
  store_id;

  @Column({ type: "varchar" })
  event_type;

  @Column({ type: "varchar" })
  product_name;

  @Column({ type: "int" })
  price;

  @Column({ type: "int" })
  price_origin;

  @Column({ type: "text" })
  product_image;

  @Column({ type: "date", default: null, nullable: true })
  start_date;

  @Column({ type: "date", default: null, nullable: true })
  end_date;

  @Column({ type: "int", default: 0 })
  view_count;

  @Column({ type: "varchar", default: "y" })
  is_display;

  @Column({ type: "int", default: 0 })
  view_count;
}

// export class Product {
//   remote_product_id;
//   store_id;
//   event_type;
//   product_name;
//   price;
//   price_origin;
//   product_image;
//   // start_date
//   // end_date
//   is_display = "y";
//   view_count = 0;
//   constructor(
//     store_id,
//     remote_product_id,
//     product_name,
//     product_image,
//     price,
//     event_type
//   ) {
//     this.store_id = store_id;
//     this.remote_product_id = remote_product_id;
//     this.event_type = event_type;
//     this.product_name = product_name;
//     this.price = price;
//     this.price_origin = price;
//     this.product_image = product_image;
//   }
// }
