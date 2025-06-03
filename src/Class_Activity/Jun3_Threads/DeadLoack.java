package Class_Activity.Jun3_Threads;
class ThreadSyncExample {
    public static int test = 9;
    public synchronized void method(){
        System.out.println(test);
        System.out.println("Thread : " + Thread.currentThread().getName()+ " entered method1");

        try{
            Thread.sleep(1000);
        }catch (InterruptedException e){
            System.out.println("Thread interrupted");
        }

    }

}

public class DeadLoack {

            public static void main(String[] args) throws InterruptedException{

                // Create a Runnable object
                WorkRunnable work = new WorkRunnable();

                // Wrap it in a Thread object
                Thread t = new Thread(work);

                // Start the thread
                t.start();

                // Main thread continues
                System.out.println("Main thread is running.");

                ThreadSyncExample obj = new ThreadSyncExample();
                obj.method();

                System.out.println("Main thread is running.");

            }


        }
