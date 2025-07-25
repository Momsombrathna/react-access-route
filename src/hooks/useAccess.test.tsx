// src/hooks/useAccess.test.tsx
import { renderHook } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { AccessProvider } from '../context/AccessProvider'
import { useAccess } from './useAccess'

describe('useAccess hook', () => {
    test('can() returns true for matching permission', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <AccessProvider
                roles={['admin']}
                permissions={[['edit', 'article']]}
            >
                {children}
            </AccessProvider>
        )

        const { result } = renderHook(() => useAccess(), { wrapper })
        expect(result.current.can('edit', 'article')).toBe(true)
        expect(result.current.can('delete', 'article')).toBe(false)
    })

    test('hasRole() returns true for existing role', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <AccessProvider
                roles={['admin', 'editor']}
                permissions={[]}
            >
                {children}
            </AccessProvider>
        )

        const { result } = renderHook(() => useAccess(), { wrapper })
        expect(result.current.hasRole('admin')).toBe(true)
        expect(result.current.hasRole('editor')).toBe(true)
        expect(result.current.hasRole('viewer')).toBe(false)
    })

    test('can() handles multiple permissions correctly', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <AccessProvider
                roles={[]}
                permissions={[
                    ['edit', 'article'],
                    ['view', 'dashboard'],
                ]}
            >
                {children}
            </AccessProvider>
        )

        const { result } = renderHook(() => useAccess(), { wrapper })
        expect(result.current.can('edit', 'article')).toBe(true)
        expect(result.current.can('view', 'dashboard')).toBe(true)
        expect(result.current.can('edit', 'dashboard')).toBe(false)
    })

})
