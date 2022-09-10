package dev.shibasis.core

/*
Components are standalone lifecycle based plugins (Should have no reference to activity)
Interactors are connections between Components and Activity framework (Should have a reference to activity)
(since we don't have a global window like web)
(This is a SingleActivity Application)
 */

abstract class Component(): BaseObserver {
    // Create invoke methods in individual components in order to give access to actual library
}
