/*
Опишите тип состояния DataState и перечисление LoadingStatus. Затем реализуйте функцию handleData(), которая принимает на вход DataState и возвращает строку в зависимости от состояния: loading... при LoadingStatus.loading, error при LoadingStatus.error, строку из числового поля data при LoadingStatus.success. Если статус не входит в перечисление, функция возвращает unknown.

const loading: DataState = { status: LoadingStatus.Loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.Success, data: 42 };
console.log(handleData(success)); // 42
*/

// BEGIN (write your solution here)
enum LoadingStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error',
}

type DataState =
    | { status: LoadingStatus.Loading }
    | { status: LoadingStatus.Success; data: number }
    | { status: LoadingStatus.Error; error: Error };

const handleData = (dataState: DataState): string => {
    switch (dataState.status) {
        case LoadingStatus.Loading:
            return 'loading...';
        case LoadingStatus.Success:
            return String(dataState.data);
        case LoadingStatus.Error:
            return dataState.error.message;
        default:
            return 'unknown';
    }
};
// END

export { DataState, LoadingStatus };
export default handleData;
