# StarkTower 
## Even ironman needs an arsenal to work with. 

### Purpose
Share business logic across 
Front-End: Android, iOS, Web
Back-End:  JVM, NodeJS, Go

You can write your Data / Logic / Framework layer in Kotlin Multiplatform using this.
It will let you build your UI and Server layers independently of business logic.


### Modules

1. Cache Module
   1. LRU ( In Memory / File Based ) Cache
   2. Key Value Stores ( DataStore, CoreData, IndexedDB )
   3. Relational Database ( SQLite, SQL.js with IndexedDB backend )
2. Bifrost ( Plugin to make this available for clients to use )
    1. Android / iOS by default behaviour
    2. Gradle Webpack task for connecting from Web with TypeScript
    3. React Native Turbo Module connector
    4. Flutter Channel based connector