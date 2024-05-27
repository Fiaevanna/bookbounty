import { profile } from "console";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text, blob } from "drizzle-orm/sqlite-core";

/* sätter upp mina tabels för databas (schema) */
export const usersTable = sqliteTable("users", {
  ID: text("ID").primaryKey(),
  fullName: text("fullName").notNull(),
  address: text("address").notNull(),
  email: text("email").unique().notNull(),
  postalCode: text("postalCode").notNull(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  phone: integer("phone").unique().notNull(),
  profileImage: blob("profileImage").$type<string>(),
});

export const booksTable = sqliteTable("books", {
  ID: integer("ID").primaryKey(),
  title: text("title").notNull(),
  bookCover: text("bookCover").notNull(),
  price: integer("price").notNull(),
  releaseYear: integer("releaseYear").notNull(),
  authorName: text("authorName").notNull(),
  bookDescription: text("bookDescription").notNull(),
  userDescription: text("userDescription").notNull(),
  ratingScore: integer("ratingScore").notNull(),
  sellerUserID: text("sellerUserID")
    .notNull()
    .references(() => usersTable.ID),
  buyerUserID: text("buyerUserID").references(() => usersTable.ID),
  isSold: integer("isSold", { mode: "boolean" }).default(false),
});

export const likesTable = sqliteTable("likes", {
  userID: text("userID")
    .notNull()
    .references(() => usersTable.ID),
  bookID: integer("bookID")
    .notNull()
    .references(() => booksTable.ID),
});

export const cartItemsTable = sqliteTable("cartItems", {
  userID: text("userID")
    .notNull()
    .references(() => usersTable.ID),
  bookID: integer("bookID")
    .notNull()
    .references(() => booksTable.ID),
});

/* Här sätter jag upp relationen mellan user och boken, https://orm.drizzle.team/docs/rqb */
export const booksRelations = relations(booksTable, ({ one }) => ({
  seller: one(usersTable, {
    fields: [booksTable.sellerUserID],
    references: [usersTable.ID],
  }),
  buyer: one(usersTable, {
    fields: [booksTable.buyerUserID],
    references: [usersTable.ID],
  }),
}));

/* Här sätter jag upp relationen mellan likes och boken, https://orm.drizzle.team/docs/rqb */
export const likesRelations = relations(likesTable, ({ one }) => ({
  book: one(booksTable, {
    fields: [likesTable.bookID],
    references: [booksTable.ID],
  }),
}));

/* använder drizzles stöd för att kunna typa mina tabels  */

export type InsertUsers = typeof usersTable.$inferInsert;
export type SelectUsers = typeof usersTable.$inferSelect;


export type InsertBooks = typeof booksTable.$inferInsert;
export type SelectBooks = typeof booksTable.$inferSelect;
export type SelectBooksAll = SelectBooks & { seller: SelectUsers };
export type SelectBooksAllWithLikes = SelectBooks & { seller: SelectUsers } & { isLiked: boolean; };

export type InsertLikes = typeof likesTable.$inferInsert;
export type SelectLikes = typeof likesTable.$inferSelect;
export type SelectLikesAll = SelectLikes & { book: SelectBooksAll };

export type InsertCartItems = typeof cartItemsTable.$inferInsert;
export type SelectCartItems = typeof cartItemsTable.$inferSelect;


