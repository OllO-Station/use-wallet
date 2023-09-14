import { createLCDClient, } from '@terra-money/wallet-types';
import { useMemo } from 'react';
import { useWallet } from './useWallet';
export function useLCDClient() {
    const { network } = useWallet();
    return useMemo(() => {
        return createLCDClient(network);
    }, [network]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTENEQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS91c2Utd2FsbGV0L3VzZUxDRENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4QyxNQUFNLFVBQVUsWUFBWTtJQUMxQixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFFaEMsT0FBTyxPQUFPLENBQVksR0FBRyxFQUFFO1FBQzdCLE9BQU8sZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUxDRENsaWVudCxcbn0gZnJvbSAnQHRlcnJhLW1vbmV5L3dhbGxldC10eXBlcyc7XG5pbXBvcnQgeyBMQ0RDbGllbnQgfSBmcm9tICdAdGVycmEtbW9uZXkvZmVhdGhlci5qcyc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnLi91c2VXYWxsZXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTENEQ2xpZW50KCk6IExDRENsaWVudCB7XG4gIGNvbnN0IHsgbmV0d29yayB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgcmV0dXJuIHVzZU1lbW88TENEQ2xpZW50PigoKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUxDRENsaWVudChuZXR3b3JrKTtcbiAgfSwgW25ldHdvcmtdKTtcbn1cbiJdfQ==