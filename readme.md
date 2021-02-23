# REDUX - STARTER

# Designing the Store

## Exercise

> Create a slice for users. {id, name}
> Create an action for adding a user.
> Create an action for assigning a bug to user.
> Create a selector for getting bugs by a user.

## Exercise - loading bugs

> if they exist in the cache

- they should come from the cache
  > if they don't exist in the cache
  - they should be fetched from the server
    > loading indicator
    - should be true while fetching
    - should be false after bugs are fetched
    - should be false if the server fails
