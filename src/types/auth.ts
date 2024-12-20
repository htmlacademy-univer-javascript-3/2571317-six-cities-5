export enum AuthorizationStatus {
	AUTHORIZED = 'authorized',
	UNAUTHORIZED = 'unauthorized'
}

export type AuthorizationRequestDto = {
	email: string;
	password: string;
};
