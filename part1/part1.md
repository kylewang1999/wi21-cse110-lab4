# Part1

## Variables and Scoping

### 1-4

1. At line 11, length of prices array would be printed to the console. This is because i is declared as a "var", instead of "let", therefore allowing it to live after the for loop terminates and allowing it to be accessed out side of the for loop.
2. At line 12, the discounted version of the last prince in prices[] would be printed, because after the final iteration of the for loop, descountedPrice would be set to prices[prices.length-1]*(1-discount)
3. At line 13, the rounded version of line 12 would be printed to the console.
4. The function would return [50,100,150]. The function essentially apply the specified discount to every element in the input prices array and returns the discounted prices.

### 5-8

5. Line 11 would produce an error, since i is of type "let", meaning it is only visible within the scope of the for loop.
6. Similar to line 11, line 12 would also produce an error for the same reason - discountedPrice is only visible within the for loop.
7. The final price (i.e. the last entry in prices[], discounted) will be printed 
to the console, because finalPrice is defined in the function discountPrices(), 
therefore it's visible within the function itself.
8. The function would return [50,100,150]. The function essentially apply the specified discount to every element in the input prices array and returns the discounted prices.

### 9-12

9. Line 11 would produce an error, since "let" i is not accessible outside the for loop.
10. (Assuming the for loop successfully executed) an empty array (i.e. ```[]```) would be printed，since ```const discounted``` is initialized to be an emtpy array.
11. 0 will be printed since ```const finalPrice``` is assigned to 0 at the beginning
of the function.
12. An error would occur, since the code inside the for loop attempts to modify 
```const finalPrice```, which is prohibited.

## Data Types

13.  
    * a.```student.name```
    * b. ```student["Grad Year"]```
    * c. ```student.greeting();```
    * d. ```student["Favorite Teacher"].name```
    * e. ```student.courseload[0]```

## Basic Operators & Type Conversion

14. Arithmetic
    * a. 32 (2 is converted to string and concatenated with '3')
    * b. 1 ('3' is converted to number and subtracted with 2)
    * c. 3 (null is converted to 0 and added to 3)
    * d. 3null (null is converted to string and concatenated after 3)
    * e. 4 (boolean ```true``` is converted to a number (1) and added wiht 3)
    * f. 0 (both false and null are converted to a number (0) and added together)
    * g. 3undefined (undefined is converted to string and concatenated after "3")
    * h. NaN (undefined is converted to NaN, stirng "3" is converted to int. Evaluating 3-Nan produces NaN)
  
15. Comparison
    * a. true (String '2' is converted to int, then compared to 1)
    * b. false (The first char of two strings are compred (2 compared to 1))
    * c. true ('2' becomes a number 2)
    * d. false (=== checks equality without type conversion, becomes false since types are different)
    * e. false (true becomes 1 and checked against 2)
    * f. true (2 becomes boolean true, and checked against true)

16. When comparing different types, ```==``` operator would convert then to numbers; whereas
    ```===``` is strict comparison that doesn't convert types.

## Conditions, Functions

17. At line 1, true is converted to number (1) and compared to 1, which is false. Then 
at line 3, 2 is converted to true and the code inside the else if statement is executed.

19. The result would be [6, 8, 10]. doSomething would execute before the callback within 
```modifyArray()```, meaning [1,2,3] is passed to ```doSomething``` first, then becomes [3,4,5], then
each element is multiplied by 2 to produce [6,8,10], the final result.

21. 1 4 3 2