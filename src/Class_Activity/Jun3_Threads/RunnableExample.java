package Class_Activity.Jun3_Threads;


class WorkRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Child thread (Runnable) is running."+ " "+ Thread.currentThread().getState());
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        // Create a Runnable object
        WorkRunnable work = new WorkRunnable();

        // Wrap it in a Thread object
        Thread t = new Thread(work);

        // Start the thread
        t.start();

        // Main thread continues
        System.out.println("Main thread is running." + t.getState()+" "+ t.getPriority());
    }
}
