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

### Description

#### LRU Cache

Normal / Coroutine based Least Recently Used Cache. (Study a good LRU library)
Meant to be configurable at-least: 
1. Cache size in items and length
2. CRUD Storage interface ( file, database, network )
3. Try to copy some items from how service workers work


RelationalInterface - none for web initially
KeyValueInterface

JSI - github repo
KV - possible for 3, easier
SQL - possible for 2, 1 with hack
LRU - pure code

#### BiFrost

It is possible to send over simple data types both directly as well as 
a promise from a Turbo Module.
( Simple Data + TurboObject + TurboArray + TurboPromise )

We can write a small extension function which can interconvert between the types. 



### DevOps 

#### Gradle 
A simple gradle bifrost plugin which would connect KMM to React Native easily

#### KMM starter template
A KMM Starter with RN Turbo Module support