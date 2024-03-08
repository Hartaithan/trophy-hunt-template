export type DefaultParams = Record<string, string | string[] | undefined>;

export interface Params<P = DefaultParams> {
  params: P;
}

export interface PageProps<P, S> {
  params: P;
  searchParams: S;
}

export interface Page<P = DefaultParams, S = DefaultParams> {
  (props: PageProps<P, S>): Promise<JSX.Element> | JSX.Element;
  defaultProps?: Partial<P> | undefined;
}

export interface RequestPageParams {
  page: string;
}

export interface RequestPageSearchParams {
  session: string;
}

export type RequestPage = Page<RequestPageParams, RequestPageSearchParams>;
