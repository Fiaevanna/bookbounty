CREATE TABLE `books` (
	`ID` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`bookCover` text NOT NULL,
	`price` integer NOT NULL,
	`releaseYear` integer NOT NULL,
	`authorName` text NOT NULL,
	`bookDescription` text NOT NULL,
	`userDescription` text NOT NULL,
	`ratingScore` integer NOT NULL,
	`sellerUserID` text NOT NULL,
	`buyerUserID` text NOT NULL,
	`isSold` integer DEFAULT false,
	FOREIGN KEY (`sellerUserID`) REFERENCES `users`(`ID`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`buyerUserID`) REFERENCES `users`(`ID`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `cartItems` (
	`userID` text NOT NULL,
	`bookID` integer NOT NULL,
	FOREIGN KEY (`userID`) REFERENCES `users`(`ID`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bookID`) REFERENCES `books`(`ID`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `likes` (
	`userID` text NOT NULL,
	`bookID` integer NOT NULL,
	FOREIGN KEY (`userID`) REFERENCES `users`(`ID`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bookID`) REFERENCES `books`(`ID`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`ID` text PRIMARY KEY NOT NULL,
	`fullName` text NOT NULL,
	`address` integer NOT NULL,
	`email` text NOT NULL,
	`postalCode` text NOT NULL,
	`city` text NOT NULL,
	`country` text NOT NULL,
	`phone` integer NOT NULL,
	`profileImage` blob
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_phone_unique` ON `users` (`phone`);