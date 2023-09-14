import { createInstallableWallets, } from '@terra-money/wallet-types';
import { useMemo } from 'react';
import { useWallet } from './useWallet';
export function useInstallableWallets() {
    const { status, availableInstallations } = useWallet();
    return useMemo(() => {
        return createInstallableWallets({
            status,
            installations: availableInstallations,
        });
    }, [availableInstallations, status]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlSW5zdGFsbGFibGVXYWxsZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS91c2Utd2FsbGV0L3VzZUluc3RhbGxhYmxlV2FsbGV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEdBRXpCLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsTUFBTSxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBRXZELE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNsQixPQUFPLHdCQUF3QixDQUFDO1lBQzlCLE1BQU07WUFDTixhQUFhLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUluc3RhbGxhYmxlV2FsbGV0cyxcbiAgSW5zdGFsbGF0aW9uLFxufSBmcm9tICdAdGVycmEtbW9uZXkvd2FsbGV0LXR5cGVzJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICcuL3VzZVdhbGxldCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnN0YWxsYWJsZVdhbGxldHMoKTogSW5zdGFsbGF0aW9uW10gfCB1bmRlZmluZWQge1xuICBjb25zdCB7IHN0YXR1cywgYXZhaWxhYmxlSW5zdGFsbGF0aW9ucyB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YWxsYWJsZVdhbGxldHMoe1xuICAgICAgc3RhdHVzLFxuICAgICAgaW5zdGFsbGF0aW9uczogYXZhaWxhYmxlSW5zdGFsbGF0aW9ucyxcbiAgICB9KTtcbiAgfSwgW2F2YWlsYWJsZUluc3RhbGxhdGlvbnMsIHN0YXR1c10pO1xufVxuIl19