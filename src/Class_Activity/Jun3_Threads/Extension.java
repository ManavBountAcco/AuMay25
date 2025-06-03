// Package name should follow naming conventions (lowercase).
package Class_Activity.Jun3_Threads;

// Class that extends Thread to create a custom thread.
class Work extends Thread {

    // This is the task that the thread will execute when started.
    @Override
    public void run() {
        // This is the code that runs in a new thread.
        System.out.println("Child thread is running - Inside run() method.");
    }
}

public class Extension {
    public static void main(String[] args) {

        // Creating an object of the class that extends Thread.
        Work w = new Work();

        // 1. Calling start() launches a new thread and then calls run().
        w.start();

        // 2. This directly calls the run() method on the same thread (main thread), not a new one.
        // It's included for demonstration, but in practice we don't usually call run() directly.
        w.run();

        // 3. This runs in the main thread.
        System.out.println("Main thread is running - Inside main().");
    }
}
