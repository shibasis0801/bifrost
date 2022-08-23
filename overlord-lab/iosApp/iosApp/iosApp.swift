import SwiftUI
import database

@main
struct iosApp: App {
	init() {
		let db = SQLDatabase(driverProvider: DriverProvider())
		PlatformKt.runBlockingQuery(sqlDatabase: db)
	}

	var body: some Scene {
		WindowGroup {
			ContentView()
		}
	}
}